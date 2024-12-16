import { WritableSignal } from '@angular/core';

export interface TechnologyInterface {
  name: string;
  images: Images;
  description: string;
}

export interface Images {
  portrait: string;
  landscape: string;
}

export interface TechLinkInterface {
  path: string;
  isActive: WritableSignal<boolean>;
}
