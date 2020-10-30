import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule} from 'ng2-charts';
import { PieComponent } from './pie/pie.component';
import { BarComponent } from './bar/bar.component';
import { LineComponent } from './line/line.component';


@NgModule({
  declarations: [PieComponent, BarComponent, LineComponent],
  exports: [
    PieComponent,
    LineComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class ChartModule { }
