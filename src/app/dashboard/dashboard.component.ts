import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Category } from './../models/category';
import { CategoryService } from './../services/categories.service';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CategoryService]
})
export class DashboardComponent implements OnInit {
  tableNumber: number = 0;
  selectedCategory: Category;
  categories: Category[];

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { 
    this.categories = categoryService.getCategories();
  }

  ngOnInit() {    
    this.tableNumber = +this.route.snapshot.queryParamMap.get('t');
  }

  selectCategory(id){
    this.selectedCategory = id;
  }

}
