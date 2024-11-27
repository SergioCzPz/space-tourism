import {
  Component,
  inject,
  OnInit,
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
  public mainSegment: WritableSignal<string> = signal('');
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = this.getMainSegment(event.url);
        this.mainSegment.set(path);
      }
    });
  }

  getMainSegment(url: string): string {
    const path = url.split('/')[1] === '' ? 'home' : url.split('/')[1];
    return path;
  }
}
