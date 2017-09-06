import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit {
  @Input()
  categoryId: number;
  constructor() { }

  ngOnInit() {
  }

}
