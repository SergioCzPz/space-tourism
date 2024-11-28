import {
  Component,
  inject,
  OnInit,
  Renderer2,
  signal,
  WritableSignal,
} from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // Change to private
  private mainSegment!: string;
  private body: HTMLElement = document.body;

  private renderer = inject(Renderer2);
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setClassBody(event.url);
      }
    });
  }

  setClassBody(url: string): void {
    let urlSegment = this.getMainSegment(url);
    urlSegment = urlSegment === '/' ? 'home' : urlSegment;

    if (this.mainSegment === urlSegment) return;

    this.renderer.removeClass(this.body, this.mainSegment);
    this.renderer.addClass(this.body, urlSegment);
    this.mainSegment = urlSegment;
  }

  getMainSegment(url: string): string {
    const path = url.split('/')[1] === '' ? 'home' : url.split('/')[1];
    return path;
  }
}
