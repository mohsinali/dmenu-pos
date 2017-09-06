import { Component, OnInit, Input } from '@angular/core';

import { Category } from './../models/category';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Input()
  categories: Category[];

  constructor() { }

  ngOnInit() {
  }

}
