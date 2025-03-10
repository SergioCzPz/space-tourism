import { Routes } from '@angular/router';
import { CrewComponent } from './pages/crew/crew.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'commander',
    pathMatch: 'full',
  },
  {
    path: ':crew',
    component: CrewComponent,
  },
];
