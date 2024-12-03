import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { TechNavComponent } from '../../components/tech-nav/tech-nav.component';
import { TechnologyService } from '../../services/technology.service';
import { TechnologyInterface } from '../../types/technology.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-technology-layout',
  standalone: true,
  imports: [TechNavComponent, CommonModule],
  templateUrl: './technology-layout.component.html',
  styleUrl: './technology-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyLayoutComponent implements OnInit {
  @Input({ required: true }) technologyName!: string;
  private technologyService = inject(TechnologyService);
  public technology: WritableSignal<TechnologyInterface> = signal({
    description: '',
    images: {
      landscape: '',
      portrait: '',
    },
    name: '',
  });
  public imageSrcset: WritableSignal<string> = signal('');

  ngOnInit(): void {
    const $technologyObservable = this.technologyService.getTechnology(
      this.technologyName
    );
    $technologyObservable
      .subscribe((tech) => {
        this.technology.set(tech);
        this.imageSrcset.set(
          `${this.technology().images.landscape} 768w,
           ${this.technology().images.portrait} 515w`
        );
      })
      .unsubscribe();
  }
}
