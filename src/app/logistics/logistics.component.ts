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
      { data: [900000, 70000, 734356, 234568, 113456], label: 'Demand Plan', type: 'line' },
      { data: [50000, 50000, 50000, 50000, 50000], label: 'Physical', stack: 'a' },
      { data: [72345, 45678, 12345, 45678, 76544], label: 'Safety Stock', stack: 'a' },
      { data: [45672, 56789, 67899, 87654, 73456], label: 'In-Transit', stack: 'a' },
    ];
    this.logisticsMultiLabels = ['P1', 'P2', 'P3', 'P4', 'P5'];
  }

}
