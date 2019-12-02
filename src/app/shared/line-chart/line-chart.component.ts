import { Component, Input, OnInit, } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit{

  @Input() lineData: ChartDataSets[];
  @Input() lineLabels: Label[];
  @Input() xLabel: string;
  @Input() yLabel: string;

  lineChartOptions: ChartOptions;
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];

  ngOnInit() {
    this.lineChartData = this.lineData;
    this.lineChartLabels = this.lineLabels;
    this.lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: this.xLabel
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: this.yLabel
          }
        }]
      },
      elements: {
        line: {
          fill: false
        }
      }
    };
  }
}