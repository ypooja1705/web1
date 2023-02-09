import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producer-list-component',
  templateUrl: './producer-list-component.component.html',
  styleUrls: ['./producer-list-component.component.scss']
})
export class ProducerListComponentComponent implements OnInit {

producerObj={
  name:"Ram",
  type:"L",
  location:"gorakhpur",
  goods:"books"

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

  this.producerObj.goods=(e.target as HTMLInputElement).value;
}

}


