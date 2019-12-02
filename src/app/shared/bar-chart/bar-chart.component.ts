import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  @Input() barData: ChartDataSets[];
  @Input() barLabels: Label[];

  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio:false,
    elements: {
      line: {
        fill: false
      }
    }
  };
  
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[];
  barChartLabels: Label[];

  
  ngOnInit() {
    this.barChartData = this.barData;
    this.barChartLabels = this.barLabels
  }
}