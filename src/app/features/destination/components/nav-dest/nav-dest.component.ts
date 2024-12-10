import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DestinationService } from '../../services/destination.service';
import { DestinationLink } from '../../types/destination-link.interface';
import { PathService } from '../../../../shared/services/path.service';
import { map, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-nav-dest',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-dest.component.html',
  styleUrl: './nav-dest.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDestComponent implements OnInit, OnDestroy {
  public rootDestPath = '/destination';
  public destinationLinks!: DestinationLink[];
  private subscription!: Subscription;

  private destinationService = inject(DestinationService);
  private pathService = inject(PathService);

  ngOnInit(): void {
    this.destinationLinks = this.destinationService.getDestinationLinks();

    this.pathService.$path
      .pipe(map((ev) => this.pathService.getLastSegment(ev.url)))
      .subscribe((destination) => this.activeLink(destination));
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  activeLink(destination: string): void {
    console.log(destination);

    this.destinationLinks
      .find((link) => link.path === destination)
      ?.isActive.set(true);
  }
}
