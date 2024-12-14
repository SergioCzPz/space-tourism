import { WritableSignal } from '@angular/core';

export interface LinkCrew {
  path: string;
  isActive: WritableSignal<boolean>;
}
