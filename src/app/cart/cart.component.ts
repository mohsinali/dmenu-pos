import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from './../models/cart-item';
import * as _ from "lodash";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input()
  cartItems: CartItem[];

  
  constructor() { }
  
  ngOnInit() {
  }

  removeItem(item){
    let index = _.indexOf(this.cartItems, item);
    this.cartItems.splice(index, 1);
  }

  increaseQty(item){
    let index = _.indexOf(this.cartItems, item);
    this.cartItems[index].quantity += 1;
  }

  decreaseQty(item){
    let index = _.indexOf(this.cartItems, item);
    if(this.cartItems[index].quantity > 1)
      this.cartItems[index].quantity -= 1;
  }

}
