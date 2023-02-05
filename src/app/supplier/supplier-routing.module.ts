import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuplierListComponent} from './suplier-list/suplier-list.component'
import { SupplierGoodsComponent } from './supplier-goods/supplier-goods.component';
const routes: Routes = [
  {
    path:"", component:SuplierListComponent 
  },
  {
    path:"supplier-list", component:SuplierListComponent
  },
  {
    path:"SupplierGoods",component:SupplierGoodsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
