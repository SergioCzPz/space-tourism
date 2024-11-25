import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-crew-nav',
  standalone: true,
  imports: [],
  templateUrl: './crew-nav.component.html',
  styleUrl: './crew-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrewNavComponent { }
