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
  donutData: number[];
  donutLabels: string[];
  xLabel: string;
  yLabel: string;
  selectedOptions: string[];
  altIngsAll = [
    ['Coconut Sugar', 'Monk Fruit Extract', 'Sucralose', 'Honey'],
    ['Rosemary', 'Nutmeg', 'Basil', 'Chives'],
    ['Tofu', 'JackFruit', 'Fish', 'Quinoa'],
    ['Rice Milk', 'Hemp Milk', 'Soya Milk', 'Coconut Milk'],
    ['Pea Protein', 'Egg Whites', 'Plant Blends', 'Brown Rice Extract']
  ]
  altIngs: string[] = this.altIngsAll[0];
  altIngindex: number = 0;
  updatedCost: number = 10;
  selIng: string = ''
  

  calcUpdatedCost() {
    this.updatedCost = Math.random()*10;
    this.updatedCost = Number(this.updatedCost.toFixed(2));
  }

  donutClicked(data: { index: number}) {
    this.selIng = this.donutLabels[data.index];
    
    this.altIngindex = data.index;
    this.altIngs = this.altIngsAll[data.index]
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  ngOnInit() {
    this.donutData = [1,2,3,4,5];
    this.donutLabels = ['Sugar','Salt','Dry Chicken','Milk Powder','Protein Supplement']
    this.selIng = this.donutLabels[0];

  }

}
