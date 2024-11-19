import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-space-capsule',
  standalone: true,
  imports: [],
  templateUrl: './space-capsule.component.html',
  styleUrl: './space-capsule.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceCapsuleComponent { }
