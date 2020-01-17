import { Component, Input, OnInit, OnChanges, } from '@angular/core';
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
  @Input() chartColor: Color[];

  public lineChartOptions: ChartOptions;
  public lineChartColors: Color[];

  public lineChartLegend = true;
  public lineChartPlugins = [];
  public lineChartType = 'line';
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  public lineChartColor: Color[];

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
          gridLines: {
            drawOnChartArea: false
          },
          ticks: {
            maxTicksLimit: 5
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
      { // grey
        backgroundColor: 'red',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      }
    ];
  }
}