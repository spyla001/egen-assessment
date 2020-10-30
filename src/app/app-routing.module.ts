import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationModule} from './modules/authorization/authorization.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/authorization/authorization.module').then(mod => mod.AuthorizationModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: '*',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
