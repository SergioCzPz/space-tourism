import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { TechNavComponent } from '../../components/tech-nav/tech-nav.component';
import { TechnologyService } from '../../services/technology.service';
import { TechnologyInterface } from '../../types/technology.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-technology-layout',
  standalone: true,
  imports: [TechNavComponent, CommonModule],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private technologyService = inject(TechnologyService);
  private $technologyObservable: Subscription | null = null;

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
