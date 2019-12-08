import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';


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
  @Input() chartColor: string;

  barChartOptions: ChartOptions;

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[];
  barChartLabels: Label[];
  public barChartColors: Color[];

  clicked(event) {
    console.log(event.active[0]['_chart'].config.data);
    console.log(event.active[0]['_index']);

  }

  ngOnInit() {
    console.log(this.chartColor);
    this.barChartColors = [
      { // red
        backgroundColor: this.chartColor,
        borderColor: this.chartColor,
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }];

    this.barChartOptions = {
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
          },
          ticks: {
            beginAtZero: true
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