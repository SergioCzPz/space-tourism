import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DestinationService } from '../../services/destination.service';
import { DestinationLink } from '../../types/destination-link.interface';
import { PathService } from '../../../../shared/services/path.service';

@Component({
  selector: 'app-nav-dest',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-dest.component.html',
  styleUrl: './nav-dest.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDestComponent implements OnInit {
  public rootDestPath = '/destination';
  public destinationLinks!: DestinationLink[];

  private destinationService = inject(DestinationService);
  private pathService = inject(PathService);

  private destination!: string;

  constructor() {
    this.destination = this.pathService.currentLastSegment();

    effect(
      () => {
        this.activeLink(this.pathService.currentLastSegment());
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {
    this.destinationLinks = this.destinationService.getDestinationLinks();
  }

  activeLink(destination: string): void {
    if (this.destination === destination) return;

    // Desactive destination
    this.destinationLinks
      .find((destination) => destination.isActive() === true)
      ?.isActive.set(false);

    // Active destination
    this.destinationLinks
      .find((link) => link.path === destination)
      ?.isActive.set(true);

    this.destination = destination;
  }
}
