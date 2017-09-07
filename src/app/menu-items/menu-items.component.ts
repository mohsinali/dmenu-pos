import { Component, OnInit, Input } from '@angular/core';

import { CategoryService } from './../services/categories.service';
import { Category } from './../models/category';
import { MenuItem } from './../models/menu-item';

@Component({
  selector: 'menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  @Input()
  menuItems: MenuItem[];

  constructor() {
  }

  ngOnInit() {
  }

}
