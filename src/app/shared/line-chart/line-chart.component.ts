import { Component, Input, OnInit, } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit{

  @Input() lineChartData: ChartDataSets[];
  @Input() lineChartLabels: Label[];
  @Input() lineChartOptions: object;
  @Input() lineChartColors: Color[];
  @Input() lineChartLegend: boolean;
  @Input() lineChartPlugins: [];
  @Input() lineChartType: string;

  ngOnInit() {
    this.lineChartData = [
      { data: [85, 72, 78, 75, 77, 75], label: 'ABC' },
      { data: [35, 72, 48, 65, 70, 35], label: 'XYZ' },
      { data: [25, 32, 68, 65, 57, 45], label: 'PQR' },
    ];

    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

    this.lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Months'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Sales($MM)'
          }
        }]
      },
      elements: {
        line: {
          fill: false
        }
      }
    };

    this.lineChartColors = [
      {
        borderColor: 'black',
        backgroundColor: 'rgba(255,255,0,0.28)',
      },
    ];

    this.lineChartLegend = true;
    this.lineChartPlugins = [];
    this.lineChartType = 'line';
  }
}