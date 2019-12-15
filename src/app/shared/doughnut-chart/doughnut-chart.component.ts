import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})

export class DoughnutChartComponent implements OnInit {
  @Input() donutData: MultiDataSet;
  @Input() donutLabels: Label[]
  @Input() chartName: string;
  @Output() clicked = new EventEmitter<object>();

  doughnutOptions
  doughnutChartData
  doughnutChartLabels: Label[] 
  doughnutChartType: ChartType

  donutClicked(event) {
    if(event.active[0]) {
      this.clicked.emit({index: event.active[0]['_index']});
    }
  }

  ngOnInit() {
    this.doughnutOptions = {
      responsive: true,
      maintainAspectRatio: false,
    }
    this.doughnutChartLabels= this.donutLabels;
    this.doughnutChartData = this.donutData;

    this.doughnutChartType = 'doughnut';
  }
}