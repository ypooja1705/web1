import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from './student/student.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent} from './forms/forms.component';
import { CustmerapplicatonComponent } from './custmerapplicaton/custmerapplicaton.component'; 
import { SupplierGoodsComponent } from './supplier/supplier-goods/supplier-goods.component';
import { ProducerListComponentComponent } from './producer/producer-list-component/producer-list-component.component';
const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"forms",component: FormsComponent},
  {path:"student",component: StudentComponent},
  {path:"customer",component: CustmerapplicatonComponent},

  // {path:'producer',component: ProducerListComponentComponent},
  // {path: 'supplier', component:SupplierGoodsComponent}
  {path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule) },
  {path: 'producer', loadChildren: () => import('./producer/producer.module').then(m => m.ProducerModule) },
  {path: 'manufacture', loadChildren: () => import('./manufacture/manufacture.module').then(m => m.ManufactureModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
