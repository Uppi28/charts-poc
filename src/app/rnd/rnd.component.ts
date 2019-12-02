import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-rnd',
  templateUrl: './rnd.component.html',
  styleUrls: ['./rnd.component.css']
})
export class RndComponent implements OnInit {

  constructor() { }

  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  xLabel: string;
  yLabel: string;

  ngOnInit() {
    this.lineChartData = [
      { data: [85, 72, 78, 75, 77, 75], label: 'ABC' },
      { data: [35, 72, 48, 65, 70, 35], label: 'XYZ' },
      { data: [25, 32, 68, 65, 57, 45], label: 'PQR' },
    ];

    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

    this.xLabel = 'Months'
    this.yLabel = 'Sales($MM)'
  }

}
