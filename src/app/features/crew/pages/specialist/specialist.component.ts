import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CrewLayoutComponent } from '../../layouts/crew-layout/crew-layout.component';
import { CrewEspEnum } from '../../types/crew.enum';

@Component({
  selector: 'app-specialist',
  standalone: true,
  imports: [CrewLayoutComponent],
  templateUrl: './specialist.component.html',
  styleUrl: './specialist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialistComponent {
  public role = CrewEspEnum.specialist;
}
