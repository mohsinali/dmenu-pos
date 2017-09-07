import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-number',
  templateUrl: './table-number.component.html',
  styleUrls: ['./table-number.component.css']
})
export class TableNumberComponent implements OnInit {
  @Output('tableNumber') 
  tableNumber: EventEmitter<number> = new EventEmitter<number>();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(value){
    this.tableNumber.emit(value);
    this.router.navigate(['/dashboard'], {queryParams: { t: value }});
  }
}
