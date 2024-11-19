import { Routes } from '@angular/router';
import { CommanderComponent } from './pages/commander/commander.component';
import { SpecialistComponent } from './pages/specialist/specialist.component';
import { PilotComponent } from './pages/pilot/pilot.component';
import { EngineerComponent } from './pages/engineer/engineer.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'commander',
    pathMatch: 'full',
  },
  {
    path: 'commander',
    component: CommanderComponent,
  },
  {
    path: 'specialist',
    component: SpecialistComponent,
  },
  {
    path: 'pilot',
    component: PilotComponent,
  },
  {
    path: 'engineer',
    component: EngineerComponent,
  },
];
