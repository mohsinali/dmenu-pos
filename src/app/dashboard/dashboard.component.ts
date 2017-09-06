import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { CategoryService } from './../services/categories.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CategoryService]
})
export class DashboardComponent implements OnInit {
  tableNumber: number = 0;
  categories;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService) { 
    this.categories = categoryService.getCategories();
  }

  ngOnInit() {    
    this.tableNumber = +this.route.snapshot.queryParamMap.get('t');
  }

}
