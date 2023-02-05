import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SuplierListComponent } from './suplier-list/suplier-list.component';
import { SupplierGoodsComponent } from './supplier-goods/supplier-goods.component';


@NgModule({
  declarations: [
    SuplierListComponent,
    SupplierGoodsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
