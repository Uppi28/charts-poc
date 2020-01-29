import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import {
  BUBBLE_DATA,
  SUPP_DIST_DATA_SUGAR,
  SUPP_DIST_DATA_SALT,
  SUPP_DIST_DATA_DRY_CHICKEN,
  SUPP_DIST_DATA_MILK_POWDER,
  SUPP_DIST_DATA_PROTEIN_SUPPLEMENT,
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
  suppDistData1: ChartDataSets[];
  suppDistData2: ChartDataSets[];
  suppDistData3: ChartDataSets[];
  suppDistData4: ChartDataSets[];

  xLabel: string = 'Composition(%)';
  suppTrendxLabel: string = 'Months';
  yLabel: string = 'Cost($)';
  trendLineData: ChartDataSets[];
  trendLineLabels: Label[]
  trendLineColor: Color[] = [];
  selectedIng: string;

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
    this.trendLineColor.slice()
    this.trendLineData[0].data = this.mockData[params.index]
    switch (params.index) {
      case 0:
        this.suppDistData1 = SUPP_DIST_DATA_SUGAR[0]
        this.suppDistData2 = SUPP_DIST_DATA_SUGAR[1]
        this.suppDistData3 = SUPP_DIST_DATA_SUGAR[2]
        this.suppDistData4 = SUPP_DIST_DATA_SUGAR[3]
        this.suppTrendData = SUPP_TREND_DATA_1
        this.selectedIng = 'SUGAR'
        break;
      case 1:
        this.suppDistData1 = SUPP_DIST_DATA_SALT[0]
        this.suppDistData2 = SUPP_DIST_DATA_SALT[1]
        this.suppDistData3 = SUPP_DIST_DATA_SALT[2]
        this.suppDistData4 = SUPP_DIST_DATA_SALT[3]
        this.suppTrendData = SUPP_TREND_DATA_2
        this.selectedIng = 'SALT'

        break;
      case 2:
        this.suppDistData1 = SUPP_DIST_DATA_DRY_CHICKEN[0]
        this.suppDistData2 = SUPP_DIST_DATA_DRY_CHICKEN[1]
        this.suppDistData3 = SUPP_DIST_DATA_DRY_CHICKEN[2]
        this.suppDistData4 = SUPP_DIST_DATA_DRY_CHICKEN[3]
        this.suppTrendData = SUPP_TREND_DATA_3
        this.selectedIng = 'DRY CHICKEN'

        break;
      case 3:
        this.suppDistData1 = SUPP_DIST_DATA_MILK_POWDER[0]
        this.suppDistData2 = SUPP_DIST_DATA_MILK_POWDER[1]
        this.suppDistData3 = SUPP_DIST_DATA_MILK_POWDER[2]
        this.suppDistData4 = SUPP_DIST_DATA_MILK_POWDER[3]
        this.suppTrendData = SUPP_TREND_DATA_4
        this.selectedIng = 'MILK POWDER'

        break;
      case 4:
        this.suppDistData1 = SUPP_DIST_DATA_PROTEIN_SUPPLEMENT[0]
        this.suppDistData2 = SUPP_DIST_DATA_PROTEIN_SUPPLEMENT[1]
        this.suppDistData3 = SUPP_DIST_DATA_PROTEIN_SUPPLEMENT[2]
        this.suppDistData4 = SUPP_DIST_DATA_PROTEIN_SUPPLEMENT[3]
        this.suppTrendData = SUPP_TREND_DATA_5
        this.selectedIng = 'PROTEIN SUPPLEMENT'

        break;
      default:
        break;
    }
  }

  suppDistClicked(params) {
    switch (this.selectedIng) {
      case 'SUGAR':
        this.suppTrendData = [];
        for(let i=0; i<SUPP_DIST_DATA_SUGAR.length; i++) {
          for(let j=0; j<SUPP_TREND_DATA_1.length; j++) {
            if((SUPP_DIST_DATA_SUGAR[params][i]) && (SUPP_DIST_DATA_SUGAR[params][i].label === SUPP_TREND_DATA_1[j].label)){
              this.suppTrendData.push(SUPP_TREND_DATA_1[j])
            }
          }
        }
        break;
      case 'SALT':
        this.suppTrendData = [];
        for(let i=0; i<SUPP_DIST_DATA_SALT.length; i++) {
          for(let j=0; j<SUPP_TREND_DATA_2.length; j++) {
            if((SUPP_DIST_DATA_SALT[params][i]) && (SUPP_DIST_DATA_SALT[params][i].label === SUPP_TREND_DATA_2[j].label)){
              this.suppTrendData.push(SUPP_TREND_DATA_2[j])
            }
          }
        }
        break;
      case 'DRY CHICKEN':
        this.suppTrendData = [];
        for(let i=0; i<SUPP_DIST_DATA_DRY_CHICKEN.length; i++) {
          for(let j=0; j<SUPP_TREND_DATA_3.length; j++) {
            if((SUPP_DIST_DATA_DRY_CHICKEN[params][i]) && (SUPP_DIST_DATA_DRY_CHICKEN[params][i].label === SUPP_TREND_DATA_3[j].label)){
              this.suppTrendData.push(SUPP_TREND_DATA_3[j])
            }
          }
        }
        break;
      case 'MILK POWDER':
        this.suppTrendData = [];
        for(let i=0; i<SUPP_DIST_DATA_MILK_POWDER.length; i++) {
          for(let j=0; j<SUPP_TREND_DATA_4.length; j++) {
            if((SUPP_DIST_DATA_MILK_POWDER[params][i]) && (SUPP_DIST_DATA_MILK_POWDER[params][i].label === SUPP_TREND_DATA_4[j].label)){
              this.suppTrendData.push(SUPP_TREND_DATA_4[j])
            }
          }
        }
        break;
      case 'PROTEIN SUPPLEMENT':
        this.suppTrendData = [];
        for(let i=0; i<SUPP_DIST_DATA_PROTEIN_SUPPLEMENT.length; i++) {
          for(let j=0; j<SUPP_TREND_DATA_5.length; j++) {
            if((SUPP_DIST_DATA_PROTEIN_SUPPLEMENT[params][i]) && (SUPP_DIST_DATA_PROTEIN_SUPPLEMENT[params][i].label === SUPP_TREND_DATA_5[j].label)){
              this.suppTrendData.push(SUPP_TREND_DATA_5[j])
            }
          }
        }
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

    this.selectedIng = 'SUGAR'
    this.bubbleData = BUBBLE_DATA;
    this.suppDistData1 = SUPP_DIST_DATA_SUGAR[0]
    this.suppDistData2 = SUPP_DIST_DATA_SUGAR[1]
    this.suppDistData3 = SUPP_DIST_DATA_SUGAR[2]
    this.suppDistData4 = SUPP_DIST_DATA_SUGAR[3]
    this.suppTrendData = SUPP_TREND_DATA_1;
  }

}
