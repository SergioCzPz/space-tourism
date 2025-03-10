import { Routes } from '@angular/router';
import { TechnologyComponent } from './pages/technology/technology.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'launch',
    pathMatch: 'full',
  },
  {
    path: ':technology',
    component: TechnologyComponent,
  },
];
