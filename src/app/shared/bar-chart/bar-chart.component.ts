import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() chartName: string;
  @Output() clicked = new EventEmitter<object>();

  barChartOptions: ChartOptions;

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[];
  barChartLabels: Label[];
  public barChartColors: Color[];

  barClicked(event) {
    this.clicked.emit({index: event.active[0]['_index'], chartName: this.chartName});
  }

  ngOnInit() {
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
          },
          gridLines: {
            drawOnChartArea: false
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: this.yLabel
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 5
          },
          gridLines: {
            drawOnChartArea: false
          }
        }],
        
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