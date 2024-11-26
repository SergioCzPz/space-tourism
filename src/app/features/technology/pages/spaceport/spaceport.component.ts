import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TechnologyLayoutComponent } from '../../layouts/technology-layout/technology-layout.component';
import { TechnologyEnum } from '../../types/technology.enum';

@Component({
  selector: 'app-spaceport',
  standalone: true,
  imports: [TechnologyLayoutComponent],
  templateUrl: './spaceport.component.html',
  styleUrl: './spaceport.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceportComponent {
  public technName = TechnologyEnum.spaceport;
}
