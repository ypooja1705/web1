import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from './student/student.component';
import { HomeComponent } from './home/home.component';
import { FormsComponent} from './forms/forms.component';
import { CustmerapplicatonComponent } from './custmerapplicaton/custmerapplicaton.component'; 
const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"forms",component: FormsComponent},
  {path:"student",component: StudentComponent},
  {path:"customer",component: CustmerapplicatonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
