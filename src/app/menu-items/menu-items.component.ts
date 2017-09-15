import { Component, OnInit, Input } from '@angular/core';

import { CategoryService } from './../services/categories.service';
import { Category } from './../models/category';
import { MenuItem } from './../models/menu-item';
import { CartItem } from './../models/cart-item';

@Component({
  selector: 'menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  @Input() cartItems: CartItem[] = [];
  @Input() menuItems: MenuItem[];

  constructor() {
  }

  ngOnInit() {
  }

  addToCart(item: MenuItem){
    console.log(item);
  
    let cItem: CartItem;
    if(this.cartItems.length > 0){

    }else{
      cItem = {id: item.id, name: item.name, quantity: 1, price: 5};
      this.cartItems.push(cItem);
    }
    
    // c_i.id = 5;
    // c_i.name = 'Mohsin';
    

    // if(this.cartItems.length > 0)
    //   this.cartItems.push(c_i);

    // console.log(c_i);
  }

}
