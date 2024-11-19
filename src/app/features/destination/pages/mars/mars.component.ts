import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mars',
  standalone: true,
  imports: [],
  templateUrl: './mars.component.html',
  styleUrl: './mars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarsComponent { }
