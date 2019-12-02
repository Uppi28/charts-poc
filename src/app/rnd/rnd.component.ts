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
  ing1Data: ChartDataSets[];
  ing1Label: Label[];
  ing2Data: ChartDataSets[];
  ing2Label: Label[];
  priceCompData: ChartDataSets[];
  priceCompLabel: Label[];
  xLabel: string;
  yLabel: string;

  ngOnInit() {
    this.ing1Data = [
      { data: [85, 72, 78, 75, 77, 75], label: 'ABC' },
      { data: [85, 72, 78, 75, 77, 75], label: 'XYZ', type: 'line'},
    ];

    this.ing1Label = ['January', 'February', 'March', 'April', 'May', 'June'];

    this.ing2Data = [
      { data: [35, 72, 48, 65, 70, 35], label: 'ABC' },
      { data: [35, 72, 48, 65, 70, 35], label: 'XYZ', type: 'line'},
    ];

    this.ing2Label = ['January', 'February', 'March', 'April', 'May', 'June'];

    this.priceCompData = [
      { data: [35, 72], label: 'ABC' }
    ];

    this.priceCompLabel = ['Ing 1', 'Ing 2'];

    this.xLabel = 'Months'
    this.yLabel = 'Sales($MM)'
  }

}
