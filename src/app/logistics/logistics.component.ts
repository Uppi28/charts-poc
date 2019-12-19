import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.css']
})
export class LogisticsComponent implements OnInit {

  constructor() { }
  logisticsMulti: ChartDataSets[];
  logisticsMultiLabels: Label[];
  xLabel: string = "Periods";
  yLabel: string = "Tonnes"
  
  ngOnInit() {
    this.logisticsMulti = [
      { data: [250000, 270000, 264356, 274568, 273456], label: 'Demand Plan', type: 'line' },
      { data: [0, 0, 150000, 0, 0], label: 'Physical', stack: 'a' },
      { data: [0, 0, 53456, 0, 0], label: 'Safety Stock', stack: 'a' },
      { data: [200000, 223456, 0, 0, 0], label: 'Churned Volume', stack: 'a' },
      { data: [0, 0, 103456, 0, 0], label: 'In-Transit', stack: 'a' },
      { data: [0, 0, 0, 287654, 273456], label: 'Planned Inventory', stack: 'a' },
    ];
    this.logisticsMultiLabels = ['P1', 'P2', 'P3', 'P4', 'P5'];
  }

}
