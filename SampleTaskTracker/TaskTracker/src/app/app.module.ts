// aby obsłużyć ngModule konieczne są poniższe dwa importy, FormsModule dodajemy później do importów
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {ListComponent} from './list/list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
