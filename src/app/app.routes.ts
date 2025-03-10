import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'destination',
    loadChildren: () =>
      import('./features/destination/destination.routes').then((m) => m.routes),
  },
  {
    path: 'crew',
    loadChildren: () =>
      import('./features/crew/crew.routes').then((m) => m.routes),
  },
  {
    path: 'technology',
    loadChildren: () =>
      import('./features/technology/technology.routes').then((m) => m.routes),
  },
];
