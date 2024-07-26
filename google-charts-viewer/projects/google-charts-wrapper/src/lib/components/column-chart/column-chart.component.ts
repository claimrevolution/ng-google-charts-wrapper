import { Component, Input, OnInit, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GoogleChartsService } from '../../services/google-charts/google-charts.service';
import { ChartDataTable } from '../../interfaces/chart-interfaces';
declare var google: any;

@Component({
  selector: 'google-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit, OnChanges {
  private static idCounter = 0; // Counter to ensure unique IDs

  @Input() chartData: ChartDataTable = { cols: [], rows: [] };
  @Input() chartTitle: string = '';
  @Input() hAxisTitle: string = '';
  @Input() vAxisTitle: string = '';
  @Input() colors: string[] = [];
  @Input() isStacked: boolean = false; // New input property to control stacking
  chartError: string = '';
  chartId: string; // Allow dynamic ID

  constructor(
    private googleChartsService: GoogleChartsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.chartId = `column_chart_${ColumnChartComponent.idCounter++}`;
   }

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
        const columnDef = {
          label: col.label,
          type: col.type,
          role: col.role
        };
        if (col.role) {
          columnDef['role'] = col.role;
        }
        data.addColumn(columnDef);
      });
  
      this.chartData.rows.forEach(row => {
        data.addRow(row.c);
      });
      
      const options = this.getChartOptions();

      const chart = new google.visualization.ColumnChart(document.getElementById(this.chartId));
      chart.draw(data, options);
    } else {
      this.chartError = 'Google Charts library not loaded.';
    }
  }

  private getChartOptions(): any {
    return {
      title: this.chartTitle,
      chartArea: { width: '80%', height: '60%' },
      isStacked: this.isStacked,
      hAxis: {
        title: this.hAxisTitle,
      },
      vAxis: {
        title: this.vAxisTitle,
        minValue: 0,
      },
      colors: this.colors || [],
      legend: {
        position: 'bottom',
        alignment: 'start',
        textStyle: { color: 'black', fontSize: 12 }
      }
    };
  }
}
