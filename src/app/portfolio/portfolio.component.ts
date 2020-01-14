import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }
  lineChartData: ChartDataSets[];
  volBarData: ChartDataSets[];
  salesBarData: ChartDataSets[];
  cogsBarData: ChartDataSets[];
  volLineData: ChartDataSets[];
  salesLineData: ChartDataSets[];
  cogsLineData: ChartDataSets[];
  mktPerfBarData: ChartDataSets[];
  lineChartLabels: Label[];
  barLabels: Label[];
  xLabel: string;
  yLabel: string;
  hardCodedData: number[][] = [
    [25, 32, 68, 65, 57, 45],
    [53, 82, 78, 46, 37, 95],
    [15, 72, 28, 35, 27, 15],
    [5, 72, 68, 95, 57, 15],
    [55, 32, 78, 15, 7, 5],
    [95, 82, 8, 15, 45, 53]
  ];

  barClicked(data: { index: number, chartName: string }) {
    let tempObj = {};
    switch (data.chartName) {
      case 'ppVol':
        this.volLineData[0]['data'] = this.hardCodedData[data.index];
        break;
      case 'ppSales':
        this.salesLineData[0]['data'] = this.hardCodedData[data.index];
        break;
      case 'ppCogs':
        this.cogsLineData[0]['data'] = this.hardCodedData[data.index];
        break;
      default:
        break;
    }
  }

  ngOnInit() {
    this.volBarData = [
      { data: [25, 32, 68, 65, 57], label: 'YoY Volume' },
    ];
    this.salesBarData = [
      { data: [2, 50, 30, 5, 27], label: 'YoY LSV' },
    ];
    this.cogsBarData = [
      { data: [10, 34, 45, 3, 76], label: 'YoY COGS' },
    ];
    this.volLineData = [
      { data: [25, 32, 68, 65, 57, 45], label: 'PoP Volume' },
    ];
    this.salesLineData = [
      { data: [2, 50, 30, 5, 27, 45], label: 'PoP LSV' },
    ];
    this.cogsLineData = [
      { data: [10, 34, 45, 3, 76, 40], label: 'PoP COGS' },
    ];
    this.mktPerfBarData = [
      { data: [1, 3, 5, 3, 7, 0], label: 'Growth% of Mars', type: 'line' },
      { data: [2, -2, 6, -5, 7, 4], label: 'Growth % of rest of the market', type: 'line' },
      { data: [1, 3, -5, 2, 7, 4], label: 'Difference between growth percentage' },
    ];

    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
    this.barLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

    this.xLabel = 'Months'
    this.yLabel = 'Sales($MM)'
  }

}
