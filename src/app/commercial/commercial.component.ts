import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import {
  BUBBLE_DATA,
  SUPP_DIST_DATA,
  SUPP_TREND_DATA_1,
  SUPP_TREND_DATA_2,
  SUPP_TREND_DATA_3,
  SUPP_TREND_DATA_4,
  SUPP_TREND_DATA_5
} from "./mockdata.constants";

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  constructor() { }
  bubbleData: ChartDataSets[];
  suppTrendData: ChartDataSets[];
  suppDistData: ChartDataSets[];

  xLabel: string = 'Composition(%)';
  suppTrendxLabel: string = 'Months';
  yLabel: string = 'Cost($)';
  trendLineData: ChartDataSets[];
  trendLineLabels: Label[]
  trendLineColor: Color[] = [];

  mockData: number[][] = [
    [1, 2, 3, 2, 5, 1],
    [0, 6, 2, 3, 1, 5],
    [3, 4, 5, 1, 2, 0],
    [4, 1, 2, 5, 1, 2],
    [6, 7, 4, 1, 3, 2]
  ]

  suppTrendmock: number[][] = [
    [4, 5, 3, 4, 3, 5],
    [3, 3, 4, 5, 3, 4],
    [5, 5, 3, 2, 4, 5],
    [4, 4, 2, 3, 4, 3],
    [4, 4, 4, 5, 3, 3]
  ]

  scatterClicked(params) {
    console.log(params);
    
    this.trendLineColor.slice()
    this.trendLineData[0].data = this.mockData[params.index]
    switch (params.index) {
      case 0:
        this.suppTrendData = SUPP_TREND_DATA_1
        break;
      case 1:
        this.suppTrendData = SUPP_TREND_DATA_2
        break;
      case 2:
        this.suppTrendData = SUPP_TREND_DATA_3
        break;
      case 3:
        this.suppTrendData = SUPP_TREND_DATA_4
        break;
      case 4:
        this.suppTrendData = SUPP_TREND_DATA_5
        break;
      default:
        break;
    }
  }

  ngOnInit() {
    this.trendLineData = [
      {
        data: [1, 2, 3, 2, 5, 1], label: 'Cost Trend',
        backgroundColor: 'red'
      }
    ];
    this.trendLineLabels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'];

    this.bubbleData = BUBBLE_DATA;
    this.suppDistData = SUPP_DIST_DATA;
    this.suppTrendData = SUPP_TREND_DATA_1;
  }

}
