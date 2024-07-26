export interface ChartColumn {
  label: string;
  type?:string;// 'string' | 'number' | 'boolean' | 'date' | 'datetime' | 'timeofday';
  role?:string;// 'data' | 'style' | 'annotation' | 'tooltip'; // Optional role for additional data features
}

export interface ChartRow {
  c:any[];
}
export interface ChartDataTable {
  cols: ChartColumn[];
  rows: ChartRow[];
}
export interface ChartOptions {
  title: string;
  width?: number;
  height?: number;
  colors?: string[];
}
