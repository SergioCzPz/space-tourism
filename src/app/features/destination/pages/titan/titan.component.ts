import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-titan',
  standalone: true,
  imports: [],
  templateUrl: './titan.component.html',
  styleUrl: './titan.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitanComponent { }
