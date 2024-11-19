import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-commander',
  standalone: true,
  imports: [],
  templateUrl: './commander.component.html',
  styleUrl: './commander.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommanderComponent { }
