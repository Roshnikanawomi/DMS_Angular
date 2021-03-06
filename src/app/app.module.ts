import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';


import {HttpClientModule} from '@angular/common/http';
import { AuditpanelComponent } from './auditpanel/auditpanel.component';
import { DocumentarchiveComponent } from './documentarchive/documentarchive.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AuditpanelComponent,
    DocumentarchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }