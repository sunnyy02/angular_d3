export interface LineData {
    label: string;
    value: number;
}

export interface ScatterData {
    label: string;
    xValue: number;
    yValue: number;
}

export interface ChartData {
    yrange: number,
    lineData: LineData[]
}

export interface ScatterChartData {
    lineData: ScatterData[];
}