import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CategoryService } from './../services/categories.service';
import { Category } from './../models/category';
import { MenuItem } from './../models/menu-item';
import { CartItem } from './../models/cart-item';
import * as _ from "lodash";

@Component({
  selector: 'menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  @Input() menuItems: MenuItem[];
  @Output() updateCart = new EventEmitter();
  
  private cartItems: CartItem[] = [];
  // @Output() cartItems: EventEmitter<CartItem[]> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  addToCart(item: MenuItem){
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

    this.updateCart.emit(this.cartItems);
  }

}
