import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import {ChartModule} from '../chart/chart.module';
import {SharedModule} from '../shared/shared.module';


const routes: Routes = [
  {
    path: 'intro',
    component: IntroductionComponent
  }]
@NgModule({
  declarations: [IntroductionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule,
    SharedModule
  ]
})
export class DashboardModule { }
