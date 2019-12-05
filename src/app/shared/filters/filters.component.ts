import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  filtersOpen: boolean = false;
  
  toggleFilters() {
    this.filtersOpen = !this.filtersOpen
  }

  selectionDone(event){
    console.log(event); 
  }
  
  ngOnInit() {
    
  }

}
