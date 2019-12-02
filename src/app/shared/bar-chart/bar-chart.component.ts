import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  @Input() barData: ChartDataSets[];
  @Input() barLabels: Label[];
  @Input() xLabel: string;
  @Input() yLabel: string;

  barChartOptions: ChartOptions;
  
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[];
  barChartLabels: Label[];
  
  ngOnInit() {
    this.barChartOptions = {
      responsive: true,
      maintainAspectRatio:false,
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

    this.barChartData = this.barData;
    this.barChartLabels = this.barLabels
  }
}