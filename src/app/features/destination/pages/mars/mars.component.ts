import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DestinationEnum } from '../../types/destination.enum';
import { DestinationLayoutComponent } from '../../layouts/destination-layout/destination-layout.component';

@Component({
  selector: 'app-mars',
  standalone: true,
  imports: [DestinationLayoutComponent],
  templateUrl: './mars.component.html',
  styleUrl: './mars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarsComponent {
  public destination = DestinationEnum.mars;
}
