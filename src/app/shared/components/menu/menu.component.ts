import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LinkInterface } from '../../types/link.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input({ required: true }) display!: boolean;

  public links: LinkInterface[] = [
    {
      displayPath: 'Home',
      routePath: '/',
    },
    {
      displayPath: 'Destination',
      routePath: '/destination',
    },
    {
      displayPath: 'Crew',
      routePath: '/crew',
    },
    {
      displayPath: 'Technology',
      routePath: '/technology',
    },
  ];
}
