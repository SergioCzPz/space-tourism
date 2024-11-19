import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-specialist',
  standalone: true,
  imports: [],
  templateUrl: './specialist.component.html',
  styleUrl: './specialist.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecialistComponent { }
