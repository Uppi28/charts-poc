import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() view: string;
  constructor() { }
  filtersOpen: boolean;
  segmentData: string[];
  categoryData: string[];
  regionData: string[];
  plantData: string[];
  brandData: string[];
  packTypeData: string[];
  skuData: string[];
  grdData: string[];
  isCommercial: boolean;

  ngOnInit() {
    this.filtersOpen = false;
    this.segmentData = ["MWC", "Petcare"];
    this.categoryData = ["Catcare", "Chocolate Confectionery", "Dogcare", "Gums", "Ice Cream"];
    this.regionData = ["Russia"];
    this.plantData = ["RU31", "RU32", "RU33", "RU37", "RU38", "XX01", "XX02", "XX03", "XX04", "XX05", "XX06", "XX07", "XX08", "XX09", "XX10", "XX11", "XX12", "XX13", "XX14"];
    this.brandData = ["CATSAN", "DREAMIES", "KITEKAT", "NATURES TABLE", "PERFECT FIT", "SHEBA", "WHISKAS", "Mixed", "CESAR", "CHAPPI", "PEDIGREE", "AMICELLI", "BALISTO", "BE-KIND", "BOUNTY", "CELEBRATIONS", "DOVE", "M&M'S", "MALTESERS", "MARS", "MILKY WAY", "SNICKERS", "TWIX", "5", "AIRWAVES", "BIG RED", "DOUBLEMINT", "EXTRA", "HUBBA BUBBA", "JUICY FRUIT", "ORBIT", "WRIGLEY'S SPEARMINT"]
    this.packTypeData = ["Litter", "C&T", "Can", "Dry", "Pouch", "Tray", "PRALINEN", "SEASONALS", "RIEGEL", "HEALTHY SNACKS RIEGEL"];
    this.skuData = ["CTSclp 5L Ultra RU", "CTSlit 10*2,5L RU", "CTSlit 10L DR RU", "CTSlit 3*5L RU", "DREAMIES  Chicken 6*60g", "DREAMIES Beef 10*30g", "DREAMIES Beef 12*140g", "DREAMIES Beef 6*60g", "Dreamies Beef Cheese 6*60g", "DREAMIES Cheese 10*30g", "Dreamies Cheese 12*140g", "DREAMIES Cheese 6*60g", "DREAMIES Chicken 10*30g", "DREAMIES Chicken 12*140g", "DREAMIES Chicken 6*60g", "Dreamies Chicken/Snck mouse 7*30g", "DREAMIES Duck 6*60g"]
    this.grdData = ["CTSclp 5L Ultra RU", "CTSlit 10*2,5L RU", "CTSlit 10L DR RU", "CTSlit 3*5L RU", "DREAMIES  Chicken 6*60g", "DREAMIES Beef 10*30g", "DREAMIES Beef 12*140g", "DREAMIES Beef 6*60g", "Dreamies Beef Cheese 6*60g", "DREAMIES Cheese 10*30g", "Dreamies Cheese 12*140g", "DREAMIES Cheese 6*60g", "DREAMIES Chicken 10*30g", "DREAMIES Chicken 12*140g", "DREAMIES Chicken 6*60g", "Dreamies Chicken/Snck mouse 7*30g", "DREAMIES Duck 6*60g"]
    this.isCommercial = this.view === 'commercial' ? true : false;
  }

  toggleFilters() {
    this.filtersOpen = !this.filtersOpen
  }

  selectionDone(event) {
    console.log(event);
  }

}
