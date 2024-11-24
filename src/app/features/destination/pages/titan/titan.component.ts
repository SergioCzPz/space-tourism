import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DestinationLayoutComponent } from '../../layouts/destination-layout/destination-layout.component';
import { DestinationEnum } from '../../types/destination.enum';

@Component({
  selector: 'app-titan',
  standalone: true,
  imports: [DestinationLayoutComponent],
  templateUrl: './titan.component.html',
  styleUrl: './titan.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitanComponent {
  public destination = DestinationEnum.titan;
}
