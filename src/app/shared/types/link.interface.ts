import { WritableSignal } from '@angular/core';

export interface LinkInterface {
  routePath: string;
  displayPath: string;
  isActive: WritableSignal<boolean>;
}
