import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TechnologyLayoutComponent } from '../../layouts/technology-layout/technology-layout.component';
import { TechnologyEnum } from '../../types/technology.enum';

@Component({
  selector: 'app-launch-vehicle',
  standalone: true,
  imports: [TechnologyLayoutComponent],
  templateUrl: './launch-vehicle.component.html',
  styleUrl: './launch-vehicle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchVehicleComponent {
  public technName = TechnologyEnum.lauch;
}
