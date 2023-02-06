import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ProducerListComponentComponent } from '../producer/producer-list-component/producer-list-component.component';
 const routes:Routes =[
  {
    path:"", component:ProducerListComponentComponent 
  },
  {
     
    path:"producer-list",component:ProducerListComponentComponent
  }
 ]


@NgModule({

  imports: [RouterModule.forChild(routes)],
  
     exports:[RouterModule]

  
})
export class ProducerRoutingModule { }
