import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CrewService } from '../../services/crew.service';
import { CrewInterface } from '../../types/crew.type';
import { CrewNavComponent } from '../../components/crew-nav/crew-nav.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription, switchMap, tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-crew-layout',
  standalone: true,
  imports: [CrewNavComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrewComponent implements OnInit, OnDestroy {
  private title = inject(Title);
  private meta = inject(Meta);
  private route = inject(ActivatedRoute);
  private crewService = inject(CrewService);
  private $crewObservable: Subscription | null = null;
  private document = inject(DOCUMENT);

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
        }),
        tap((member) => {
          const pageTitle = `Crew - ${member.role}`;
          const imageUrl = `${this.document.location.origin}${member.images.png}`;

          this.title.setTitle(pageTitle);
          this.meta.updateTag({
            name: 'description',
            content: member.bio,
          });
          this.meta.updateTag({
            name: 'og:title',
            content: pageTitle,
          });
          this.meta.updateTag({
            name: 'og:description',
            content: member.bio,
          });
          this.meta.updateTag({
            name: 'og:image',
            content: imageUrl,
          });
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
