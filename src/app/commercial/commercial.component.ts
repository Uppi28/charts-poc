import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  constructor() { }
  donutData
  donutLabels
  bubbleData: ChartDataSets[];

  xLabel: string = 'Composition';
  yLabel: string = 'Cost(%)';

  donutClicked(event) {
    console.log(event);
  }

  ngOnInit() {
    this.donutData = [1,2,3,4,5];
    this.donutLabels = ['Ing 1 ','Ing 2','Ing 3','Ing 4','Ing 5']

    this.bubbleData = [
      {
        data: [
          { x: 10, y: 10, r: 10 },
          { x: 15, y: 5, r: 15 },
          { x: 24, y: 12, r: 23 },
          { x: 7, y: 8, r: 8 },
        ],
        label: 'Series A',
        backgroundColor: 'green',
        borderColor: 'blue',
        hoverBackgroundColor: 'purple',
        hoverBorderColor: 'red',
      },
    ];
  }
  
}
