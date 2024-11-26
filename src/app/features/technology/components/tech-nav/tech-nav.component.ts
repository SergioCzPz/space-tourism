import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tech-nav',
  standalone: true,
  imports: [],
  templateUrl: './tech-nav.component.html',
  styleUrl: './tech-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechNavComponent { }
