import { Component, effect, inject, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { PathService } from './shared/services/path.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private body: HTMLElement = document.body;
  private renderer = inject(Renderer2);
  private pathService = inject(PathService);
  private mainSegment: string = 'home';

  constructor() {
    effect(() => {
      this.setClassBody(this.pathService.currentMainSegment());
    });
  }

  ngOnInit(): void {
    this.renderer.addClass(this.body, this.mainSegment);
  }

  setClassBody(urlSegment: string): string {
    if (this.mainSegment === urlSegment) return this.mainSegment;

    this.renderer.removeClass(this.body, this.mainSegment);
    this.renderer.addClass(this.body, urlSegment);
    this.mainSegment = urlSegment;
    return urlSegment;
  }
}
