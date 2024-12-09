import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DestinationService } from '../../services/destination.service';
import { DestinationLink } from '../../types/destination-link.interface';

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

  ngOnInit(): void {
    this.destinationLinks = this.destinationService.getDestinationLinks();
  }

  activeLink(event: any): void {
    console.log(event);
    console.log(event.srcElement.textContent);
  }
}
