import { Component, inject, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { PathService } from './shared/services/path.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private mainSegment!: string;
  private body: HTMLElement = document.body;
  private renderer = inject(Renderer2);
  private pathService = inject(PathService);

  ngOnInit(): void {
    this.pathService.$path
      .pipe(map((ev) => this.pathService.getMainSegment(ev.url)))
      .subscribe((urlSegment) => {
        this.setClassBody(urlSegment);
      });
  }

  setClassBody(urlSegment: string): void {
    if (this.mainSegment === urlSegment) return;

    this.renderer.removeClass(this.body, this.mainSegment);
    this.renderer.addClass(this.body, urlSegment);
    this.mainSegment = urlSegment;
  }
}
