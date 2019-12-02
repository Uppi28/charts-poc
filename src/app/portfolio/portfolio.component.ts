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

  barData: ChartDataSets[]
  barLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  xLabel: string;
  yLabel: string;

  ngOnInit() {
    this.barData = [
        { data: [85, 72, 78, 75, 77, 75], label: 'ABC', stack: 'a'},
        { data: [35, 72, 48, 65, 70, 35], label: 'XYZ', stack: 'a' },
        { data: [25, 32, 68, 65, 57, 45], label: 'PQR', stack: 'a' },
      ];
    this.xLabel = 'Months';
    this.yLabel = "Sales($MM)"
  }

}
