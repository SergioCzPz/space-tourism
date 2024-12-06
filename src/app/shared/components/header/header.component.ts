import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isMenuDisplayed: WritableSignal<boolean> = signal<boolean>(false);

  openMenu(): void {
    this.isMenuDisplayed.set(true);
  }
}
