import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pilot',
  standalone: true,
  imports: [],
  templateUrl: './pilot.component.html',
  styleUrl: './pilot.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PilotComponent { }
