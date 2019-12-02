import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})

export class DoughnutChartComponent {
  doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
  }
  doughnutChartLabels: Label[] = ['Mars', 'Suppliers'];
  doughnutChartData: MultiDataSet = [
    [55, 25]
  ];
  doughnutChartType: ChartType = 'doughnut';

}