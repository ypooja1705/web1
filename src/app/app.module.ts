import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
// import { SupplierModule } from './supplier/supplier.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import {ApiService} from './api.service';
import { MenuComponent } from './shared/menu/menu.component';
import { CustmerapplicatonComponent } from './custmerapplicaton/custmerapplicaton.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormsComponent,
    StudentComponent,
    MenuComponent,
    CustmerapplicatonComponent,
    
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // SupplierModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
