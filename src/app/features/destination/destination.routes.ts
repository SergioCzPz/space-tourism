import { Routes } from '@angular/router';
import { MoonComponent } from './pages/moon/moon.component';
import { MarsComponent } from './pages/mars/mars.component';
import { EuropaComponent } from './pages/europa/europa.component';
import { TitanComponent } from './pages/titan/titan.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'moon',
    pathMatch: 'full',
  },
  {
    path: 'moon',
    component: MoonComponent,
  },
  {
    path: 'mars',
    component: MarsComponent,
  },
  {
    path: 'europa',
    component: EuropaComponent,
  },
  {
    path: 'titan',
    component: TitanComponent,
  },
];
