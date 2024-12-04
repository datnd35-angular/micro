import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'micro_sub2',
    loadChildren: () =>
      import('micro_sub2/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'micro_sub1',
    loadChildren: () =>
      import('micro_sub1/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
