import {
  Component,
  effect,
  inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { PathService } from './shared/services/path.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private body: HTMLElement | null = null;
  private renderer: Renderer2 | null = null;
  private pathService = inject(PathService);
  private mainSegment: string = 'home';
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer = inject(Renderer2);
      this.body = document.body;
      effect(() => {
        this.setClassBody(this.pathService.currentMainSegment());
      });
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId) && this.renderer && this.body) {
      this.renderer.addClass(this.body, this.mainSegment);
    }
  }

  setClassBody(urlSegment: string): string {
    if (isPlatformBrowser(this.platformId) && this.renderer && this.body) {
      if (this.mainSegment === urlSegment) return this.mainSegment;

      this.renderer.removeClass(this.body, this.mainSegment);
      this.renderer.addClass(this.body, urlSegment);
      this.mainSegment = urlSegment;
    }
    return urlSegment;
  }
}
