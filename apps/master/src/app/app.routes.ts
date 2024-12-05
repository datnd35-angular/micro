import { loadRemoteModule } from '@nx/angular/mf';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'micro_sub1',
    loadChildren: () =>
      loadRemoteModule('micro_sub1', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'micro_sub2',
    loadChildren: () =>
      loadRemoteModule('micro_sub2', './Routes').then((m) => m.remoteRoutes)
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
