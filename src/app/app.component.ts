import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo_angular';

  menuSource=[{
    route:"home",
    displayName:"Home",
    cssClass:"btn btn-primary"
  },
  {
    route:"forms",
    displayName:"Forms",
    cssClass:"btn btn-secondary"
  },
  {
    route:"student",
    displayName:"Student",
    cssClass:"btn btn-danger"
  },
  {
    route:"customer",
    displayName:"Customer",
    cssClass:"btn btn-info"
  },

  {
    route:"supplier",
    displayName:"Supplier",
    cssClass:"btn btn-warning"
  },
  {
    route:"supplier/supplier-list",
    displayName:"Supplier-List",
    cssClass:"btn btn-dark"
  },
  {
    route:"supplier/SupplierGoods",
    displayName:"Supplier Goods",
    cssClass:"btn btn-default"
  },
  {
    route:"producer/producer-list",
    displayName:"Producer-List",
    cssClass:"btn btn-info"
  },
  {
    route:"manufacture/manufacture-List",
    displayName:"Manufacture-List",
    cssClass:"btn btn-warning"
  }

];
}
  