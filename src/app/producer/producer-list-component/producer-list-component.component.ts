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
tt:string="";
constructor(){

}

ngOnInit(): void {
    
}

}

