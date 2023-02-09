import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufactureComponent } from './manufacture.component';
import { ManufactureRoutingModule } from '../manufacture--routing/manufacture--routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManufactureComponent
  ],
  imports: [
    CommonModule,ManufactureRoutingModule,FormsModule
  ]
})
export class ManufactureModule { }
