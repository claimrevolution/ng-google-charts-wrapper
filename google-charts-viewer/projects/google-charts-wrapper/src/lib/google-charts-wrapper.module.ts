import { NgModule } from '@angular/core';
import { GoogleChartsWrapperComponent } from './google-charts-wrapper.component';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';



@NgModule({
  declarations: [
    GoogleChartsWrapperComponent,   
    ColumnChartComponent, 
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [
  ],
  exports: [
    GoogleChartsWrapperComponent,
    ColumnChartComponent, 
    BarChartComponent,
    PieChartComponent
  ]
})
export class GoogleChartsWrapperModule { }
