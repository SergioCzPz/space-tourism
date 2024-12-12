import {
  computed,
  inject,
  Injectable,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  public currentPath: WritableSignal<string> = signal('/');
  public currentMainSegment: Signal<string> = computed(() => {
    return this.getMainSegment(this.currentPath());
  });
  public currentLastSegment: Signal<string> = computed(() => {
    return this.getLastSegment(this.currentPath());
  });

  private router = inject(Router);

  constructor() {
    this.router.events
      .pipe(
        filter((ev) => ev instanceof NavigationEnd),
        map((navEvent) => navEvent.urlAfterRedirects)
      )
      .subscribe((urlAfterRedirects) => {
        this.updateActivePath(urlAfterRedirects);
        console.log('currentMainSegment ', this.currentMainSegment());
        console.log('currentLastSegment ', this.currentLastSegment());
      });
  }

  private updateActivePath(urlAfterRedirects: string): void {
    if (this.currentPath() !== urlAfterRedirects) {
      this.currentPath.set(urlAfterRedirects);
    }
  }

  public getMainSegment(url: string): string {
    const segments = url.split('/');
    return segments[1] === '' ? 'home' : segments[1];
  }

  public getLastSegment(url: string): string {
    const segments = url.split('/');
    return segments.length > 2 ? segments[segments.length - 1] : '/';
  }
}
