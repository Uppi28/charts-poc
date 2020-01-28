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
    [6,7,4,1,3,2]
  ]
  
  scatterClicked(data) {
    console.log(data);
    
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
        label: "Sugar",
        data: [
          { x: 5, y: 15.59, r: 30 }
        ],
        backgroundColor: '#ffa1b5',
        hoverBackgroundColor: '#ffa1b5'
      },
      {
        label: "Salt",
        data: [
          { x: 13, y: 3, r: 20 }
        ],
        backgroundColor: '#86c7f3',
        hoverBackgroundColor: '#86c7f3'
      },
      {
        label: "Dry Chicken",
        data: [
          { x: 11, y: 23, r: 44 }
        ],
        backgroundColor: '#ffe29a',
        hoverBackgroundColor: '#ffe29a'
      },
      {
        label: "Milk Powder",
        data: [
          { x: 19, y: 14, r: 79 }
        ],
        backgroundColor: '#f1f2f4',
        hoverBackgroundColor: '#f1f2f4'
      },
      {
        label: "Protein Supplement",
        data: [
          { x: 0, y: 19, r: 14 }
        ],
        backgroundColor: '#93d9d9',
        hoverBackgroundColor: '#93d9d9'
      }
    ]
  }
  
}
