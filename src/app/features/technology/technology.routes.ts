import { Routes } from '@angular/router';
import { LaunchVehicleComponent } from './pages/launch-vehicle/launch-vehicle.component';
import { SpaceportComponent } from './pages/spaceport/spaceport.component';
import { SpaceCapsuleComponent } from './pages/space-capsule/space-capsule.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'launch',
    pathMatch: 'full',
  },
  {
    path: 'launch',
    component: LaunchVehicleComponent,
  },
  {
    path: 'spaceport',
    component: SpaceportComponent,
  },
  {
    path: 'capsule',
    component: SpaceCapsuleComponent,
  },
];
