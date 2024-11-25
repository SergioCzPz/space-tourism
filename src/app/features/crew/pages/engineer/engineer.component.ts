import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CrewLayoutComponent } from '../../layouts/crew-layout/crew-layout.component';
import { CrewEspEnum } from '../../types/crew.enum';

@Component({
  selector: 'app-engineer',
  standalone: true,
  imports: [CrewLayoutComponent],
  templateUrl: './engineer.component.html',
  styleUrl: './engineer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EngineerComponent {
  public role = CrewEspEnum.engineer;
}
