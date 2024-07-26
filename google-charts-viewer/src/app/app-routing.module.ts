import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartViewerComponent } from './components/chart-viewer/chart-viewer.component';

const routes: Routes = [
  { path: '', component: ChartViewerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
