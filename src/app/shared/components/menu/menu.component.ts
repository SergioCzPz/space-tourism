import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { PathService } from '../../services/path.service';
import { CommonModule } from '@angular/common';
import { links } from '../../types/links.constant';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Input({ required: true }) display!: WritableSignal<boolean>;

  public links = links;
  public isActiveLink: WritableSignal<boolean> = signal(false);

  private lastSegment: string = 'home';
  private pathService = inject(PathService);

  ngOnInit(): void {
    this.pathService.$path.subscribe((path) => {
      this.updateLinkActive(path);
    });
  }

  updateLinkActive(urlSegment: string) {
    if (this.lastSegment === urlSegment) return;

    this.links
      .find((link) => link.displayPath.toLowerCase() === this.lastSegment)
      ?.isActive.set(false);

    this.links
      .find((link) => link.displayPath.toLowerCase() === urlSegment)
      ?.isActive.set(true);

    this.lastSegment = urlSegment;
  }

  closeNav() {
    this.display.set(false);
  }
}
