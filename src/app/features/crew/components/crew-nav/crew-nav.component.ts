import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { CrewService } from '../../services/crew.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LinkCrew } from '../../types/interface.link.crew';
import { PathService } from '../../../../shared/services/path.service';

@Component({
  selector: 'app-crew-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './crew-nav.component.html',
  styleUrl: './crew-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrewNavComponent implements OnInit {
  private crewService = inject(CrewService);
  private pathService = inject(PathService);

  public path = '/crew';
  public crewLinks!: LinkCrew[];
  private role: string;

  constructor() {
    this.role = this.pathService.currentLastSegment();
    effect(
      () => {
        this.setActiveLink(this.pathService.currentLastSegment());
      },
      { allowSignalWrites: true }
    );
  }
  ngOnInit(): void {
    this.crewLinks = this.crewService.getLinks();
  }

  setActiveLink(crewRole: string) {
    if (this.role === crewRole) return;
    this.setInactiveLink();
    this.crewLinks.find((link) => link.path === crewRole)?.isActive.set(true);
    this.role = crewRole;
  }

  setInactiveLink() {
    this.crewLinks
      .find((link) => link.isActive() === true)
      ?.isActive.set(false);
  }
}
