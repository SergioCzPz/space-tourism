import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CrewLayoutComponent } from '../../layouts/crew-layout/crew-layout.component';
import { CrewEspEnum } from '../../types/crew.enum';

@Component({
  selector: 'app-commander',
  standalone: true,
  imports: [CrewLayoutComponent],
  templateUrl: './commander.component.html',
  styleUrl: './commander.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommanderComponent {
  public role = CrewEspEnum.commander;
}
