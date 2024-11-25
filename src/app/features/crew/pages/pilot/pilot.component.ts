import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CrewLayoutComponent } from '../../layouts/crew-layout/crew-layout.component';
import { CrewEspEnum } from '../../types/crew.enum';

@Component({
  selector: 'app-pilot',
  standalone: true,
  imports: [CrewLayoutComponent],
  templateUrl: './pilot.component.html',
  styleUrl: './pilot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PilotComponent {
  public role = CrewEspEnum.pilot;
}
