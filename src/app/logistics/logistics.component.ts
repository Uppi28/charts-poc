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
  splitCostData: ChartDataSets[];
  splitCostLabel: Label[] = ['Freight 1','Freight 2','Freight 3','Freight 4','Freight 5',];
  marsVsuppBarData: ChartDataSets[];
  marsVsuppBarLabel: Label[] = ['Mars', 'Supplier']
  ngOnInit() {
    this.splitCostData = [
      { data: [85, 75, 66, 88, 99], label: 'Cost', stack: 'a'},
    ];
    this.marsVsuppBarData = [
      { data: [85, 75], label: 'MarsVsSupp', stack: 'a'},
    ];
  }

}
