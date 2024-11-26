import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TechnologyLayoutComponent } from '../../layouts/technology-layout/technology-layout.component';
import { TechnologyEnum } from '../../types/technology.enum';

@Component({
  selector: 'app-space-capsule',
  standalone: true,
  imports: [TechnologyLayoutComponent],
  templateUrl: './space-capsule.component.html',
  styleUrl: './space-capsule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceCapsuleComponent {
  public technName = TechnologyEnum.capsule;
}
