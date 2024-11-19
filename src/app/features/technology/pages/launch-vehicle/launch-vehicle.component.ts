import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-launch-vehicle',
  standalone: true,
  imports: [],
  templateUrl: './launch-vehicle.component.html',
  styleUrl: './launch-vehicle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchVehicleComponent { }
