import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() clicked = new EventEmitter<object>();
  @Input() bubbleName: string;

  constructor() { }

  public bubbleChartOptions: ChartOptions;
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  scatterClicked(event) {
    if(this.bubbleName === 'ingDist'){
      this.clicked.emit({chartName: 'ingDist', index: event.active[0]['_datasetIndex'], color: event.active[0]['_options'].backgroundColor});
    } else if(this.bubbleName === 'suppTrend') {
      // this.clicked.emit({chartName: 'suppTrend', index: event.active[0]['_datasetIndex'], color: event.active[0]['_options'].backgroundColor});
    }
  }

  ngOnInit() {
    this.bubbleChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        callbacks: {
          label: (item, data) => 
          {
            return data.datasets[item.datasetIndex].label
          }
        }
      },
      legend: {
        display: this.bubbleName === 'suppDist' ? false: true
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: this.bubbleName === 'suppDist' ? false: true,
            labelString: this.xLabel
          },
          ticks: {
            min: this.bubbleName === 'suppTrend' ? 1 : 0,
            max: this.bubbleName === 'suppTrend' ? 6 : 30,
            stepSize: this.bubbleName === 'suppTrend' ? 1 : 5,
            display: this.bubbleName === 'suppDist' ? false: true,
          },
          gridLines: {
            drawOnChartArea: false,
            display: this.bubbleName === 'suppDist' ? false: true,
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: (this.bubbleName === 'suppTrend' || this.bubbleName === 'suppDist') ? false : true,
            labelString: this.yLabel
          },
          ticks: {
            min: 0,
            max: this.bubbleName === 'suppTrend' ? 6 : 30,
            display: (this.bubbleName === 'suppTrend' || this.bubbleName === 'suppDist') ? false : true,
          },
          gridLines: {
            drawOnChartArea: this.bubbleName === 'suppTrend' ? true : false,
            display: this.bubbleName === 'suppDist' ? false: true,
          }
        }]
      }
    };
  }

}
