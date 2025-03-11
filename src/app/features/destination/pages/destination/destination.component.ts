import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { Destination } from '../../types/destination.interface';
import { DestinationService } from '../../services/destination.service';
import { NavDestComponent } from '../../components/nav-dest/nav-dest.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NavDestComponent, CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DestinationComponent implements OnInit, OnDestroy {
  private title = inject(Title);
  private meta = inject(Meta);
  private route = inject(ActivatedRoute);
  private destinationService = inject(DestinationService);
  private $destObservable: Subscription | null = null;
  private document = inject(DOCUMENT);

  public destination: WritableSignal<Destination> = signal({
    name: '',
    images: { png: '', webp: '' },
    description: '',
    distance: '',
    travel: '',
  });

  ngOnInit(): void {
    this.$destObservable = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const destinationName = params.get('destination');
          if (destinationName !== null) {
            return this.destinationService.getDestination(destinationName);
          }
          return new Observable<Destination>();
        }),
        tap((dest) => {
          const pageTitle = `Destination - ${dest.name}`;
          const imageUrl = `${this.document.location.origin}${dest.images.png}`;

          this.title.setTitle(pageTitle);
          this.meta.updateTag({
            name: 'description',
            content: dest.description,
          });
          this.meta.updateTag({
            name: 'og:title',
            content: pageTitle,
          });
          this.meta.updateTag({
            name: 'og:description',
            content: dest.description,
          });
          this.meta.updateTag({
            name: 'og:image',
            content: imageUrl,
          });
        })
      )
      .subscribe((dest) => {
        if (dest) {
          this.destination.set(dest);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.$destObservable) {
      this.$destObservable.unsubscribe();
    }
  }
}
