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
  lineChartLabels: Label[];
  barLabels: Label[];
  xLabel: string;
  yLabel: string;

  ngOnInit() {
    this.volBarData = [
      { data: [25, 32, 68, 65, 57, 45], label: 'PQR' },
    ];
    this.salesBarData = [
      { data: [2, 50, 30, 5, 27, 45], label: 'PQR' },
    ];
    this.cogsBarData = [
      { data: [90, 80, 70, 60, 50, 40], label: 'PQR' },
    ];
    this.volLineData = [
      { data: [25, 32, 68, 65, 57, 45], label: 'PQR' },
    ];
    this.salesLineData = [
      { data: [2, 50, 30, 5, 27, 45], label: 'PQR' },
    ];
    this.cogsLineData = [
      { data: [90, 80, 70, 60, 50, 40], label: 'PQR' },
    ];

    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
    this.barLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

    this.xLabel = 'Months'
    this.yLabel = 'Sales($MM)'
  }

}
