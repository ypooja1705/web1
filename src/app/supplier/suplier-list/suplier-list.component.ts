import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-suplier-list',
  templateUrl: './suplier-list.component.html',
  styleUrls: ['./suplier-list.component.scss']
})
export class SuplierListComponent implements OnInit {

  supplierObj={
    name:"abc",
    type:"M",
    location:"Kanpur",
    goods:"leather"
  }
tt:string="";
constructor(){

}

ngOnInit(): void {
    
}

updateTextField(e:Event){
  debugger;
  console.log(e);

  // this.tt=this.supplierObj.goods;
  // (e.target as HTMLInputElement).value= this.supplierObj.goods;

  this.supplierObj.goods=(e.target as HTMLInputElement).value;
}

}
