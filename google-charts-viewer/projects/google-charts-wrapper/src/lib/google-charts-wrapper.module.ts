import { NgModule } from '@angular/core';
import { GoogleChartsWrapperComponent } from './google-charts-wrapper.component';
import { ColumnChartComponent } from './components/column-chart/column-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    GoogleChartsWrapperComponent,   
    ColumnChartComponent, BarChartComponent 
  ],
  imports: [
  ],
  exports: [
    GoogleChartsWrapperComponent,
    ColumnChartComponent, 
    BarChartComponent
  ]
})
export class GoogleChartsWrapperModule { }
