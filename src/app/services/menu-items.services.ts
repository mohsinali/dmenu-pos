import { Injectable } from '@angular/core';
import { MenuItem } from './../models/menu-item';

@Injectable()
export class MenuItemsService {
  getMenusByCategory(id: number): MenuItem[]{
    return [
      { id: 11, name: 'Burger', price: 5 },
      { id: 12, name: 'Rice', price: 5 },
      { id: 13, name: 'Broast', price: 5 },
      { id: 14, name: 'Celeritas', price: 5 },
      { id: 15, name: 'Magneta', price: 5 },
      { id: 16, name: 'RubberMan', price: 5 },
      { id: 17, name: 'Dynama', price: 5 },
      { id: 18, name: 'Dr IQ', price: 5 },
      { id: 19, name: 'Magma', price: 5 },
      { id: 20, name: 'Tornado', price: 5 }
    ];
  }
}