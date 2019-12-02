import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  constructor() { }
  ingData: ChartDataSets[]
  ingLabel: Label[] = ['Ingredients'];
  lineChartData: ChartDataSets[]
  lineChartLabel: Label[] = ['Ingredients'];
  xLabel: string = 'Months';
  yLabel: string = "Sales($MM)";
  ngOnInit() {
    this.ingData = [
      { data: [85], label: 'Ing 1', stack: 'a'},
      { data: [65], label: 'Ing 2', stack: 'b' },
      { data: [95], label: 'Ing 3', stack: 'c' },
    ];

    this.lineChartData = [
      { data: [85, 72, 78, 75, 77, 75], label: 'ABC' }
    ];
    this.lineChartLabel = ['January', 'February', 'March', 'April', 'May', 'June'];
  }
}
