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
  donutData: number[];
  donutLabels: string[];
  xLabel: string;
  yLabel: string;
  selectedOptions: string[];
  altIngsAll = [
    ['Alt11', 'Alt12', 'Alt13', 'Alt14'],
    ['Alt21', 'Alt22', 'Alt23', 'Alt24'],
    ['Alt31', 'Alt32', 'Alt33', 'Alt34'],
    ['Alt41', 'Alt42', 'Alt43', 'Alt44'],
    ['Alt51', 'Alt52', 'Alt53', 'Alt54']
  ]
  altIngs: string[] = this.altIngsAll[0];
  altIngindex: number = 0;
  updatedCost: number = 10;
  

  calcUpdatedCost() {
    this.updatedCost = Math.random()*10;
  }

  donutClicked(data: { index: number}) {
    this.altIngindex = data.index;
    this.altIngs = this.altIngsAll[data.index]
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

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

    this.donutData = [1,2,3,4,5];
    this.donutLabels = ['Ing 1 ','Ing 2','Ing 3','Ing 4','Ing 5']
  }

}
