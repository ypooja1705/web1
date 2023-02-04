import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import{HttpClient}from'@angular/common/http';
@Component({
  selector: 'app-custmerapplicaton',
  templateUrl: './custmerapplicaton.component.html',
  styleUrls: ['./custmerapplicaton.component.scss']
})
export class CustmerapplicatonComponent implements OnInit{
  customers:any;
  customersForm= {
   "customerCode":"", "customerName":"", "customerAmount":''
  } 

  constructor(private api: ApiService,private http:HttpClient) {
  }
  ngOnInit(): void {
    this.api.getcustomers().subscribe(record => {
      this.customers = record;
      console.log(record);
    });
}
onClick() {
  debugger; 

  let isconfirmed = confirm("are you sure to insert customer record");
  if (isconfirmed) {
    this.http.post("http://localhost:3000/customer", this.customersForm).subscribe(record => {
      this.customers.push(record);
      console.log("post response", record);
    })
  }
  else {
    alert("no record inserted");
  }
}
}
