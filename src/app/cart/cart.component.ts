import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from './../models/cart-item';
import * as _ from "lodash";

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartItems: CartItem[];
  @Output() qtyIncrease = new EventEmitter();
  @Output() qtyDecrease = new EventEmitter();
  @Output() removeItem = new EventEmitter();
  @Input() cart_total: number = 0;
  @Input() totals;

  
  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  onCancel(){
    this.router.navigate(['/']);
  }

  deleteItem(item){    
    this.removeItem.emit(item);
  }

  increaseQty(item){
    this.qtyIncrease.emit(item);    
  }

  decreaseQty(item){
    this.qtyDecrease.emit(item);
  }

}
