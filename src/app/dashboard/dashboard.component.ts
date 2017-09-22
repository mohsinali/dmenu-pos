import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Category } from './../models/category';
import { CategoryService } from './../services/categories.service';
import { MenuItem } from './../models/menu-item';
import { MenuItemsService } from './../services/menu-items.services';
import { CartItem } from './../models/cart-item';
import * as _ from "lodash";


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CategoryService, MenuItemsService]
})
export class DashboardComponent implements OnInit {
  tableNumber: number = 0;
  selectedCategory: Category;
  categories: Category[];
  menuItems: MenuItem[];
  @Input() cartItems: CartItem[] = [];

  constructor(
        private route: ActivatedRoute, 
        private categoryService: CategoryService,
        private menuItemServie: MenuItemsService){ 
    this.categories = categoryService.getCategories();
    // this.selectedCategory = _.first(this.categories);
  }

  ngOnInit() {
    this.tableNumber = +this.route.snapshot.queryParamMap.get('t');    
  }

  selectCategory(id){ 
    this.selectedCategory = id;
    this.menuItems = this.menuItemServie.getMenusByCategory(id);
  }

  onCartUpdated(i: CartItem[]){
    this.cartItems = i;
  }

}
