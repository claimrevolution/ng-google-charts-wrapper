import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleChartsService {
  private googleChartsLoaded = false;
  private googleChartsLoadingPromise: Promise<void> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  loadGoogleCharts(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) {
      return Promise.resolve(); // Resolve immediately if not in a browser
    }

    if (this.googleChartsLoadingPromise) {
      return this.googleChartsLoadingPromise;
    }

    this.googleChartsLoadingPromise = new Promise((resolve, reject) => {
      if (this.googleChartsLoaded) {
        resolve();
        return;
      }

      if (!document.getElementById('google-charts-script')) {
        const script = document.createElement('script');
        script.id = 'google-charts-script';
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.onload = () => {
          google.charts.load('current', { packages: ['corechart'] });
          google.charts.setOnLoadCallback(() => {
            this.googleChartsLoaded = true;
            resolve();
          });
        };
        script.onerror = (error) => {
          this.googleChartsLoadingPromise = null; // Reset in case of failure
          reject(error);
        };
        document.head.appendChild(script);
      } else {
        google.charts.setOnLoadCallback(() => {
          this.googleChartsLoaded = true;
          resolve();
        });
      }
    });

    return this.googleChartsLoadingPromise;
  }
}
