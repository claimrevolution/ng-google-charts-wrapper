import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartViewerComponent } from './components/chart-viewer/chart-viewer.component';
import { GoogleChartsWrapperModule } from 'google-charts-wrapper';

@NgModule({
  declarations: [
    AppComponent,
    ChartViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsWrapperModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
