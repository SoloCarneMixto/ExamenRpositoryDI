import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tareas',
    pathMatch: 'full',
  },
  {
    path: 'tareas',
    loadComponent: () => import('./pages/tareas/tareas.page').then( m => m.TareasPage)
  },
  {
    path: 'nuevatarea',
    loadComponent: () => import('./pages/nuevatarea/nuevatarea.page').then( m => m.NuevatareaPage)
  },
];
