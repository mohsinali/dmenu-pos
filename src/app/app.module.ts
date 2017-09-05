import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableNumberComponent } from './table-number/table-number.component';
import { MainContentAreaComponent } from './main-content-area/main-content-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableNumberComponent,
    MainContentAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
