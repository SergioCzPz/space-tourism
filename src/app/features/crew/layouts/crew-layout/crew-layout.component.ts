import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CrewService } from '../../services/crew.service';
import { CrewInterface } from '../../types/crew.type';
import { CrewNavComponent } from '../../components/crew-nav/crew-nav.component';

@Component({
  selector: 'app-crew-layout',
  standalone: true,
  imports: [CrewNavComponent],
  templateUrl: './crew-layout.component.html',
  styleUrl: './crew-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrewLayoutComponent implements OnInit {
  @Input({ required: true }) crewRole!: string;
  private crewService = inject(CrewService);
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
    const $crewObservable = this.crewService.getCrew(this.crewRole);
    $crewObservable
      .subscribe((crewMem) => {
        console.log('INIT CREW');

        this.crewMember.set(crewMem);
      })
      .unsubscribe();
  }
}
