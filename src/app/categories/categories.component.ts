import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Category } from './../models/category';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input()
  categories: Category[];

  @Output('selectedCategoryId')
  selectedCategoryId: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(id: number){
    this.selectedCategoryId.emit(id);
  }

}
