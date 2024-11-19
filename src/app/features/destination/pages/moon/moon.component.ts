import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-moon',
  standalone: true,
  imports: [],
  templateUrl: './moon.component.html',
  styleUrl: './moon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoonComponent { }
