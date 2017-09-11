import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableNumberComponent } from './table-number/table-number.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableNumberComponent,
    DashboardComponent,
    StatusBarComponent,
    CategoriesComponent,
    MenuItemsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: "", component: TableNumberComponent },
      { path: "dashboard", component: DashboardComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
