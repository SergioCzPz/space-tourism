import { Routes } from '@angular/router';
import DestinationComponent from './pages/destination/destination.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'moon',
    pathMatch: 'full',
  },
  {
    path: ':destination',
    component: DestinationComponent,
  },
];
