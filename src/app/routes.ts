import { Routes } from '@angular/router';
import { BaseComponent } from './pages/base/base.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'base'
  },
  {
    path: 'base',
    component: BaseComponent
  }
];
