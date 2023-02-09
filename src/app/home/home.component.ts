 import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  students:any;
  constructor(private api:ApiService){

  }
ngOnInit(): void {
  this.api.getStudents().subscribe(data =>{
    this.students=data;
    console.log(data);
  });
}

homeSource=[{
  route:"home",
  displayName:"Home",
  cssClass:"btn btn-primary"},

  {route:"form",
  displayName:"Form",
  cssClass:"btn btn-info"
  },
  {
    route:"student",
  displayName:"Student",
  cssClass:"btn btn-danger"
  },
  {
  route:"customer",
  displayName:"Customer",
  cssClass:"btn btn-warning "
  }
]

}
