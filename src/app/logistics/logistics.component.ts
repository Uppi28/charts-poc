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
      { data: [35000, 37000, 36435, 37456, 38000, 33456, 37653, 39876], label: 'Demand Plan', type: 'line' },
      { data: [0, 0, 0, 0, 0, 20000, 0, 0], label: 'Physical', stack: 'a' },
      { data: [0, 0, 0, 0, 0, 10000, 0, 0], label: 'Safety Stock', stack: 'a' },
      { data: [50000, 55345, 50005, 53456, 56540, 0, 0, 0], label: 'Churned Volume', stack: 'a' },
      { data: [0, 0, 0, 0, 0, 20000, 0, 0], label: 'In-Transit', stack: 'a' },
      { data: [0, 0, 0, 0, 0, 0, 58765, 57345], label: 'Planned Volume', stack: 'a' },
    ];
    this.logisticsMultiLabels = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'];
  }
}
