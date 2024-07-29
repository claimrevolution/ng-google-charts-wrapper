import { Component, Input, OnInit, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GoogleChartsService } from '../../services/google-charts/google-charts.service';
import { ChartDataTable } from '../../interfaces/chart-interfaces'; // Ensure the path is correct
declare var google: any;

@Component({
  selector: 'google-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() chartData: ChartDataTable = { cols: [], rows: [] };
  @Input() chartTitle: string = '';
  @Input() chartId: string = 'pie_chart';
  chartError: string = '';

  constructor(
    private googleChartsService: GoogleChartsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.googleChartsService.loadGoogleCharts().then(() => {
        this.drawChart();
      }).catch(error => {
        console.error('Error loading Google Charts:', error);
        this.chartError = 'Error loading Google Charts';
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['chartData'] && !changes['chartData'].firstChange) {
      this.drawChart();
    }
  }

  private drawChart() {
    if (!this.chartData || this.chartData.rows.length === 0 || this.chartData.cols.length === 0) {
      this.chartError = 'No data available to display.';
      return;
    }

    if (typeof google !== 'undefined' && google.visualization) {
      this.chartError = '';

      const data = new google.visualization.DataTable();
      this.chartData.cols.forEach(col => {
        data.addColumn({ label: col.label, type: col.type, role: col.role });
      });

      this.chartData.rows.forEach(row => {
        data.addRow(row.c.map(cell => cell.v));
      });

      const options = {
        title: this.chartTitle,
        is3D: true, // Example option for pie charts
        // Add more pie chart specific options here
      };

      const chart = new google.visualization.PieChart(document.getElementById(this.chartId));
      chart.draw(data, options);
    } else {
      this.chartError = 'Google Charts library not loaded.';
    }
  }
}
