import { Component, } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {

  lineChartData: ChartDataSets[] = [
    { data: [11, 0, 17, 19, 25, 70], label: 'Crude oil prices' },
    { data: [95, 82, 88, 85, 87, 85], label: 'Crude oil prices' },
    { data: [5, 72, 88, 95, 97, 85], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Price in $(MM)'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Months'
        }
      }]
    },
    elements: {
      line: {
        fill: false
      }
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}