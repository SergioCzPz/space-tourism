import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { Destination } from '../../types/destination.interface';
import { DestinationService } from '../../services/destination.service';
import { NavDestComponent } from '../../components/nav-dest/nav-dest.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination-layout',
  standalone: true,
  imports: [NavDestComponent, CommonModule],
  templateUrl: './destination-layout.component.html',
  styleUrl: './destination-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestinationLayoutComponent implements OnInit {
  @Input({ required: true }) destinationName!: string;
  private destinationService = inject(DestinationService);
  public destination: WritableSignal<Destination> = signal({
    name: '',
    images: { png: '', webp: '' },
    description: '',
    distance: '',
    travel: '',
  });

  ngOnInit(): void {
    const $destObservable = this.destinationService.getDestination(
      this.destinationName
    );
    $destObservable
      .subscribe((dest) => this.destination.set(dest))
      .unsubscribe();

    console.log(this.destination());
  }
}
