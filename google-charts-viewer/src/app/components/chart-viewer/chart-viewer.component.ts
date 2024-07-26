import { Component } from '@angular/core';
import { ChartDataTable } from 'google-charts-wrapper';

@Component({
  selector: 'app-chart-viewer',
  templateUrl: './chart-viewer.component.html',
  styleUrl: './chart-viewer.component.scss'
})
export class ChartViewerComponent {

  title = 'Pet Population Comparison';

  stackedChartData: ChartDataTable = {
    cols: [
      { label: 'Household', type: 'string' },
      { label: 'Dogs', type: 'number' },
      { label: 'Cats', type: 'number' }
    ],
    rows: [
      { c: [{ v: 'Household 1' }, { v: 3 }, { v: 2 }] },
      { c: [{ v: 'Household 2' }, { v: 5 }, { v: 1 }] },
      { c: [{ v: 'Household 3' }, { v: 2 }, { v: 4 }] },
      { c: [{ v: 'Household 4' }, { v: 1 }, { v: 3 }] }
    ]
  };

  normalChartData: ChartDataTable = {
    cols: [
      { label: 'Household', type: 'string' },
      { label: 'Pets', type: 'number' }
    ],
    rows: [
      { c: [{ v: 'Household 1' }, { v: 5 }] },
      { c: [{ v: 'Household 2' }, { v: 6 }] },
      { c: [{ v: 'Household 3' }, { v: 6 }] },
      { c: [{ v: 'Household 4' }, { v: 4 }] }
    ]
  };
  barChartData: ChartDataTable = {
    cols: [
      { label: 'Household', type: 'string' },
      { label: 'Dogs', type: 'number' },
      { label: 'Cats', type: 'number' }
    ],
    rows: [
      { c: [{ v: 'Household 1' }, { v: 3 }, { v: 2 }] },
      { c: [{ v: 'Household 2' }, { v: 5 }, { v: 1 }] },
      { c: [{ v: 'Household 3' }, { v: 2 }, { v: 4 }] },
      { c: [{ v: 'Household 4' }, { v: 1 }, { v: 3 }] }
    ]
  };

  chartData:ChartDataTable = {
    cols: [
      { label: 'Household', type: 'string' },
      { label: 'Dogs', type: 'number' },
      { label: 'Dog Style', type: 'string', role: 'style' },
      { label: 'Dog Annotation', type: 'string', role: 'annotation' },
      { label: 'Cats', type: 'number' },
      { label: 'Cat Style', type: 'string', role: 'style' },
      { label: 'Cat Annotation', type: 'string', role: 'annotation' }
    ],
    rows: [
      { c: [{ v: 'Household 1' }, { v: 5 }, { v: 'color: #1f77b4' }, { v: '5 Dogs' }, { v: 3 }, { v: 'color: #ff7f0e' }, { v: '3 Cats' }] },
      { c: [{ v: 'Household 2' }, { v: 4 }, { v: 'color: #1f77b4' }, { v: '4 Dogs' }, { v: 2 }, { v: 'color: #ff7f0e' }, { v: '2 Cats' }] },
      { c: [{ v: 'Household 3' }, { v: 3 }, { v: 'color: #1f77b3' }, { v: '3 Dogs' }, { v: 5 }, { v: 'color: #ff7f5e' }, { v: '5 Cats' }] },
      { c: [{ v: 'Household 4' }, { v: 2 }, { v: 'color: #1f77b4' }, { v: '2 Dogs' }, { v: 2 }, { v: 'color: #ff7f0e' }, { v: '2 Cats' }] }
    ]
  };
  chartOptions = {
    title: this.title,
    hAxisTitle: 'Household',
    vAxisTitle: 'Number of Pets',
    colors: ['#1f77b4', '#ff7f0e']
  };
}
