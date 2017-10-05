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
  totals = {
    grossTotal: 0,
    netTotal: 0,
    totalItems: 0
  };

  @Input() cartItems: CartItem[] = [];

  constructor(
        private route: ActivatedRoute,         
        private menuItemServie: MenuItemsService){}

  ngOnInit() {
    this.tableNumber = +this.route.snapshot.queryParamMap.get('t');    
  }

  selectCategory(id){ 
    this.selectedCategory = id;
    this.menuItems = this.menuItemServie.getMenusByCategory(id);
  }

  onSelectItem(item){
    let cItem: CartItem;
    if(this.cartItems.length > 0){
      let index = _.findIndex(this.cartItems, (i) => {
        return item.id === i.id;
      });

      if(index === -1){ // Not found
        cItem = {id: item.id, name: item.name, quantity: 1, price: item.price};
        this.cartItems.push(cItem);

      }else{ // Item found, increase quantity
        cItem = this.cartItems[index];
        cItem.quantity = cItem.quantity + 1;
        this.cartItems[index] = cItem;
      }
      
      console.log(this.cartItems);
    }else{
      cItem = {id: item.id, name: item.name, quantity: 1, price: item.price};
      this.cartItems.push(cItem);
    }
    this.updateTotals();
  }

  onRemoveItem(item){
    let index = _.indexOf(this.cartItems, item);
    this.cartItems.splice(index, 1);
    this.updateTotals();
  }

  onIncreaseQty(item){
    let index = _.indexOf(this.cartItems, item);
    this.cartItems[index].quantity += 1;

    this.updateTotals();
  }

  onDecreaseQty(item){
    let index = _.indexOf(this.cartItems, item);
    if(this.cartItems[index].quantity > 1)
      this.cartItems[index].quantity -= 1;

    this.updateTotals();
  }

  updateTotals(){
    this.totals.grossTotal = _.sumBy(this.cartItems, function(o){ return (o.quantity * o.price) });
    this.totals.totalItems = this.cartItems.length;
  }

}
