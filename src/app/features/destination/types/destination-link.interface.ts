import { WritableSignal } from '@angular/core';
import { DestinationEnum } from './destination.enum';

export interface DestinationLink {
  display: DestinationEnum;
  path: string;
  isActive: WritableSignal<boolean>;
}
