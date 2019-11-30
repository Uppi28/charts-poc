import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  constructor() { }
  barData: ChartDataSets[]
  ngOnInit() {
    this.barData = [
      { data: [85, 72, 78, 75, 107, 75], label: 'ABC', stack: 'a', type: 'line'},
      { data: [25, 32, 68, 65, 57, 45], label: 'PQR', stack: 'a', type: 'line'},
      { data: [35, 72, 48, 65, 90, 35], label: 'XYZ', stack: 'a', type: 'line'},
      { data: [85, 72, 78, 75, 77, 75], label: 'ABC', stack: 'a'},
      { data: [35, 72, 48, 65, 70, 35], label: 'XYZ', stack: 'a' },
      { data: [25, 32, 68, 65, 57, 45], label: 'PQR', stack: 'a' },
      
    ];
  }

}
