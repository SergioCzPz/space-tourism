import { inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  public $path!: Observable<string>;

  private router = inject(Router);

  constructor() {
    this.$path = this.router.events.pipe(
      filter((ev) => ev instanceof NavigationEnd),
      map((ev) => this.getMainSegment(ev.url))
    );
  }

  private getMainSegment(url: string): string {
    const path = url.split('/')[1] === '' ? 'home' : url.split('/')[1];
    return path;
  }
}
