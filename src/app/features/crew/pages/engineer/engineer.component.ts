import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-engineer',
  standalone: true,
  imports: [],
  templateUrl: './engineer.component.html',
  styleUrl: './engineer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EngineerComponent { }
