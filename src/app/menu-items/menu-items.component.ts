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
  @Output() selectedItem = new EventEmitter();
  
  private cartItems: CartItem[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(item){
    this.selectedItem.emit(item);
  }

}
