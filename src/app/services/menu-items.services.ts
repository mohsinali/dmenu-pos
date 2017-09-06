import { Injectable } from '@angular/core';
import { MenuItem } from './../models/menu-item';

@Injectable()
export class MenuItemsService {
  getMenusByCategory(id: number): MenuItem[]{
    return [
      { id: 11, name: 'Burger' },
      { id: 12, name: 'Rice' },
      { id: 13, name: 'Broast' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
  }
}