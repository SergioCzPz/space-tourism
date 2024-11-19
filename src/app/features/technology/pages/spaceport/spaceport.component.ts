import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spaceport',
  standalone: true,
  imports: [],
  templateUrl: './spaceport.component.html',
  styleUrl: './spaceport.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceportComponent { }
