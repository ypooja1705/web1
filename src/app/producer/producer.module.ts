import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducerListComponentComponent } from './producer-list-component/producer-list-component.component';
import { ProducerRoutingModule } from '../producer--routing/producer--routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProducerListComponentComponent
  ],
  imports: [
    CommonModule,
    ProducerRoutingModule,FormsModule
  ]
})
export class ProducerModule { }
