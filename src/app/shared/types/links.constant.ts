import { signal } from '@angular/core';
import { LinkInterface } from './link.interface';

export const links: LinkInterface[] = [
  {
    displayPath: 'Home',
    routePath: '/',
    isActive: signal(true),
  },
  {
    displayPath: 'Destination',
    routePath: '/destination',
    isActive: signal(false),
  },
  {
    displayPath: 'Crew',
    routePath: '/crew',
    isActive: signal(false),
  },
  {
    displayPath: 'Technology',
    routePath: '/technology',
    isActive: signal(false),
  },
];
