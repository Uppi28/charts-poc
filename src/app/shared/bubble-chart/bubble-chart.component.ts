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

  constructor() { }

  public bubbleChartOptions: ChartOptions;
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  scatterClicked(event) {
    if(event.active[0]['_datasetIndex']){
      this.clicked.emit({index: event.active[0]['_datasetIndex'], color: event.active[0]['_options'].backgroundColor});
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
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: this.xLabel
          },
          ticks: {
            min: 0,
            max: 30
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
            min: 0,
            max: 30,
            maxTicksLimit: 5
          },
          gridLines: {
            drawOnChartArea: false
          }
        }]
      }
    };
  }

}
