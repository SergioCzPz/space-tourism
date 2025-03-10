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
import { CrewService } from '../../services/crew.service';
import { CrewInterface } from '../../types/crew.type';
import { CrewNavComponent } from '../../components/crew-nav/crew-nav.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-crew-layout',
  standalone: true,
  imports: [CrewNavComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrewComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private crewService = inject(CrewService);
  private $crewObservable: Subscription | null = null;

  public crewMember: WritableSignal<CrewInterface> = signal({
    bio: '',
    images: {
      png: '',
      webp: '',
    },
    name: '',
    role: '',
  });

  ngOnInit(): void {
    this.$crewObservable = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const member = params.get('crew');
          if (member !== null) {
            return this.crewService.getCrew(member);
          }
          return new Observable<CrewInterface>();
        })
      )
      .subscribe((member) => {
        if (member) {
          this.crewMember.set(member);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.$crewObservable) {
      this.$crewObservable.unsubscribe();
    }
  }
}
