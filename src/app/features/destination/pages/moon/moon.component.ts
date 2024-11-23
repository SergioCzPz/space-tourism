import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DestinationLayoutComponent } from '../../layouts/destination-layout/destination-layout.component';
import { DestinationEnum } from '../../types/destination.enum';

@Component({
  selector: 'app-moon',
  standalone: true,
  imports: [DestinationLayoutComponent],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoonComponent {
  public destination = DestinationEnum.moon;
}
