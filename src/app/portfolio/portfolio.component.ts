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

  lineChartDataMulti: ChartDataSets[];
  lineChartData: ChartDataSets[];
  barData: ChartDataSets[];
  barDataMulti: ChartDataSets[];
  lineChartLabelsMulti: Label[];
  lineChartLabels: Label[];
  barLabels: Label[];
  barLabelsMulti: Label[];
  xLabel: string;
  yLabel: string;

  ngOnInit() {
    this.lineChartDataMulti = [
      { data: [85, 72, 78, 75, 77, 75], label: 'ABC' },
      { data: [35, 72, 48, 65, 70, 35], label: 'XYZ' },
      { data: [25, 32, 68, 65, 57, 45], label: 'PQR' },
    ];
    this.lineChartData = [
      { data: [85, 72, 78, 75, 77, 75], label: 'ABC' }
    ];
    this.barData = [
      { data: [25, 32, 68, 65, 57, 45], label: 'PQR'},
    ];
    this.barDataMulti = [
      { data: [85, 72, 78, 75, 107, 75], label: 'ABC', stack: 'a', type: 'line'},
      { data: [25, 32, 68, 65, 57, 45], label: 'PQR', stack: 'a', type: 'line'},
      { data: [35, 72, 48, 65, 90, 35], label: 'XYZ', stack: 'a', type: 'line'},
      { data: [85, 72, 78, 75, 77, 75], label: 'ABC', stack: 'a'},
      { data: [35, 72, 48, 65, 70, 35], label: 'XYZ', stack: 'a' },
      { data: [25, 32, 68, 65, 57, 45], label: 'PQR', stack: 'a' },
    ];

    this.lineChartLabelsMulti = ['January', 'February', 'March', 'April', 'May', 'June'];
    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
    this.barLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
    this.barLabelsMulti = ['January', 'February', 'March', 'April', 'May', 'June'];

    this.xLabel = 'Months'
    this.yLabel = 'Sales($MM)'
  }

}
