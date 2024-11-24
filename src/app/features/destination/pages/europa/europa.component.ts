import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DestinationLayoutComponent } from '../../layouts/destination-layout/destination-layout.component';
import { DestinationEnum } from '../../types/destination.enum';

@Component({
  selector: 'app-europa',
  standalone: true,
  imports: [DestinationLayoutComponent],
  templateUrl: './europa.component.html',
  styleUrl: './europa.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EuropaComponent {
  public destination = DestinationEnum.europa;
}
