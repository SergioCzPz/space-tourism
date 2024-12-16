import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import { TechnologyService } from '../../services/technology.service';
import { TechLinkInterface } from '../../types/technology.interface';
import { PathService } from '../../../../shared/services/path.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tech-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tech-nav.component.html',
  styleUrl: './tech-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechNavComponent implements OnInit {
  private technologyService = inject(TechnologyService);
  private pathService = inject(PathService);

  public pathTechnology = '/technology';
  public paths!: TechLinkInterface[];
  private activeTech: string;

  constructor() {
    this.activeTech = this.pathService.currentLastSegment();
    effect(
      () => {
        this.setActiveLink(this.pathService.currentLastSegment());
      },
      {
        allowSignalWrites: true,
      }
    );
  }

  ngOnInit(): void {
    this.paths = this.technologyService.getPaths();
  }

  setActiveLink(path: string) {
    if (this.activeTech === path) return;
    this.setInactivePath();
    this.paths
      .find((pathToActive) => pathToActive.path === path)
      ?.isActive.set(true);
    this.activeTech = path;
  }

  setInactivePath() {
    this.paths.find((path) => path.isActive() === true)?.isActive.set(false);
  }
}
