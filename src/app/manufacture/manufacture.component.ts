import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacture',
  templateUrl: './manufacture.component.html',
  styleUrls: ['./manufacture.component.scss']
})
export class ManufactureComponent implements OnInit {
  manufactureObj={
    name:"sansha",
    location:"jaipur",
    goods:"marbles"
  }

  constructor(){

  }

ngOnInit(): void {
    
}
updateTextField(e:Event){
  debugger;
  console.log(e);

  // this.tt=this.supplierObj.goods;
  // (e.target as HTMLInputElement).value= this.supplierObj.goods;

  this.manufactureObj.goods=(e.target as HTMLInputElement).value;
}
}