import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DestinationEnum } from '../../types/destination.enum';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-dest',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-dest.component.html',
  styleUrl: './nav-dest.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDestComponent {
  public destinations = Object.keys(DestinationEnum);
  public rootDestPath = '/destination';
}
