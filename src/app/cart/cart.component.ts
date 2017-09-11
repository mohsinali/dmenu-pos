import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from './../models/cart-item';

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

}
