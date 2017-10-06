import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
  constructor(private http: Http){}
  getCategories() {
    let headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("Authorization", "2e70f23e-23d7-455d-aa20-15d6edb9661b");
    let options = new RequestOptions({ headers })
    return this.http.get('http://stage.dmenu.co:3000/api/v1/categories', options);
    
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