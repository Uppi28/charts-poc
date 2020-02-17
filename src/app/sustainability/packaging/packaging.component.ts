import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-packaging',
  templateUrl: './packaging.component.html',
  styleUrls: ['./packaging.component.css']
})
export class PackagingComponent implements OnInit {

  constructor() { }

  xLabel: string = "Packaging Type";
  yLabel: string = "Weight (In Tonnes)";
  mktVsEprData: ChartDataSets[] = [
    { data: [100, 300, 200, 300, 154, 120], label: 'Growth% of Mars', type: 'line' },
    { data: [124, 334, 220, 320, 160, 130], label: 'Difference between growth percentage' },
  ];
  ngOnInit() {
  }

}
