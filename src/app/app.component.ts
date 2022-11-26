import { Component } from '@angular/core';
import { ChartData, ScatterChartData } from './chartData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'd3test';
  chartData_2D_1: ChartData = {
    yrange: 200000,
    lineData: [
      { label: 'Vue', value: 166443 },
      { label: 'React', value: 150793 },
      { label: 'Angular', value: 62342 },
      { label: 'Backbone', value: 27647 },
      { label: 'Ember', value: 21471 },
    ],
  };

  chartData_2D_2: ChartData = {
    yrange: 1,
    lineData: [
      { label: 'CSharp', value: 0.33 },
      { label: 'JavaScript', value: 0.67 },
      { label: 'TypeScript', value: 0.4 },
      { label: 'Java', value: 0.25 },
    ],
  };

  scatterData: ScatterChartData = {
    lineData: [
      { label: 'Vue', xValue: 2014, yValue: 166443 },
      { label: 'React', xValue: 2013, yValue: 150793 },
      { label: 'Angular', xValue: 2016, yValue: 62342 },
      { label: 'Backbone', xValue: 2010, yValue: 27647 },
      { label: 'Ember', xValue: 2011, yValue: 21471 },
    ],
  };
}
