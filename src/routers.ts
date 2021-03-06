import { lazy } from 'solid-js';
import type { RouteDefinition } from 'solid-app-router';

import Home from './views/home/Home';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '**',
    component: lazy(() => import('./views/errors/404')),
  },
];