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
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-destination',
  standalone: true,
  imports: [NavDestComponent, CommonModule],
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DestinationComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private destinationService = inject(DestinationService);
  private $destObservable: Subscription | null = null;

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
