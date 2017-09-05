import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-number',
  templateUrl: './table-number.component.html',
  styleUrls: ['./table-number.component.css']
})
export class TableNumberComponent implements OnInit {
  @Output('tableNumber') 
  tableNumber: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value){
    console.log('In Table Number Component', value);
    this.tableNumber.emit(value);
  }
}
