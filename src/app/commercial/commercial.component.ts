import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  constructor() { }
  bubbleData: ChartDataSets[];

  xLabel: string = 'Composition(%)';
  yLabel: string = 'Cost($)';
  trendLineData: ChartDataSets[];
  trendLineLabels: Label[]
  trendLineColor: Color[] = [];

  mockData: number[][] = [
    [1,2,3,2,5,1],
    [0,6,2,3,1,5],
    [3,4,5,1,2,0],
    [4,1,2,5,1,2],
  ]
  
  scatterClicked(data) {
    console.log(data.color);
    this.trendLineColor.slice()
    this.trendLineData[0].data = this.mockData[data.index]
  }

  ngOnInit() {
    this.trendLineData = [
      { 
        data: [1,2,3,2,5,1], label: 'Cost Trend',
        backgroundColor: 'red'
      }
    ];
    this.trendLineLabels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];

    this.bubbleData = [
      {
        data: [
          { x: 10, y: 10, r: 10 },
          { x: 15, y: 5, r: 15 },
          { x: 24, y: 12, r: 23 },
          { x: 7, y: 8, r: 8 },
        ],
        label: 'Cost per Kilogram',
        backgroundColor: 'green',
        borderColor: 'transparent'
      },
    ];
  }
  
}
