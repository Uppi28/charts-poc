import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

  @Input() xLabel: string;
  @Input() yLabel: string;
  @Input() bubbleChartData: ChartDataSets[];

  constructor() { }

  public bubbleChartOptions: ChartOptions;
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartColors: Color[] = [
    {
      backgroundColor: [
        'green',
        'red',
        'blue',
        'purple',
        'yellow',
        'brown',
        'magenta',
        'cyan',
        'orange',
        'pink'
      ]
    }
  ];

  ngOnInit() {
    this.bubbleChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: this.xLabel
          },
          ticks: {
            min: 0,
            max: 30,
          }
        }],
        yAxes: [{
            scaleLabel: {
              display: true,
              labelString: this.yLabel
            },
            ticks: {
              min: 0,
              max: 30,
            }
          }]
      }
    };
  }

}
