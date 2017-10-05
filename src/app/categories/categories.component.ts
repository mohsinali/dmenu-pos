import { element } from 'protractor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CategoryService } from './../services/categories.service';
import { Category } from './../models/category';


@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  // @Input()
  categories: any[];

  @Output('selectedCategoryId')
  selectedCategoryId: EventEmitter<number> = new EventEmitter<number>();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      (response) => {
        this.categories = response.json();
        console.log(this.categories);        
      },
      (err) => {}
    )
    
  }

  onSelect(id: number){
    this.selectedCategoryId.emit(id);
  }

}
