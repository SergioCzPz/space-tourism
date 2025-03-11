import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { TechNavComponent } from '../../components/tech-nav/tech-nav.component';
import { TechnologyService } from '../../services/technology.service';
import { TechnologyInterface } from '../../types/technology.interface';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-technology-layout',
  standalone: true,
  imports: [TechNavComponent, CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyComponent implements OnInit, OnDestroy {
  private title = inject(Title);
  private meta = inject(Meta);
  private route = inject(ActivatedRoute);
  private technologyService = inject(TechnologyService);
  private $technologyObservable: Subscription | null = null;
  private document = inject(DOCUMENT);

  public technology: WritableSignal<TechnologyInterface> = signal({
    description: '',
    images: {
      landscape: '',
      portrait: '',
    },
    name: '',
  });
  public imageSrcset: WritableSignal<string> = signal('');

  ngOnInit(): void {
    this.$technologyObservable = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const tech = params.get('technology');
          if (tech !== null) {
            return this.technologyService.getTechnology(tech);
          }
          return new Observable<TechnologyInterface>();
        }),
        tap((tech) => {
          const pageTitle = `Technology - ${tech.name}`;
          const imageUrl = `${this.document.location.origin}${tech.images.landscape}`;

          this.title.setTitle(pageTitle);
          this.meta.updateTag({
            name: 'description',
            content: tech.description,
          });
          this.meta.updateTag({
            name: 'og:title',
            content: pageTitle,
          });
          this.meta.updateTag({
            name: 'og:description',
            content: tech.description,
          });
          this.meta.updateTag({
            name: 'og:image',
            content: imageUrl,
          });
          this.meta.updateTag({
            name: 'og:image:width',
            content: '1200',
          });
          this.meta.updateTag({
            name: 'og:image:height',
            content: '600',
          });
        })
      )
      .subscribe((tech) => {
        this.technology.set(tech);
        this.imageSrcset.set(
          `${this.technology().images.landscape} 768w,
         ${this.technology().images.portrait} 515w`
        );
      });
  }

  ngOnDestroy(): void {
    if (this.$technologyObservable) {
      this.$technologyObservable.unsubscribe();
    }
  }
}
