import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
  constructor(private http: Http){}
  getCategories() {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
    // return [
    //   { id: 11, name: 'Mr. Nice' },
    //   { id: 12, name: 'Narco' },
    //   { id: 13, name: 'Bombasto' },
    //   { id: 14, name: 'Celeritas' },
    //   { id: 15, name: 'Magneta' },
    //   { id: 16, name: 'RubberMan' },
    //   { id: 17, name: 'Dynama' },
    //   { id: 18, name: 'Dr IQ' },
    //   { id: 19, name: 'Magma' },
    //   { id: 20, name: 'Tornado' }
    // ];
  }
}