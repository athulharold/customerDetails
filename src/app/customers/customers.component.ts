import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ICustomer} from "../shared/interfaces";
import {DataService} from "../core/data.service";
import {CustomersRoutingModule} from './customers-routing.module'
import {OrdersModule} from '../orders/orders.module';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [
  ]
})
export class CustomersComponent implements OnInit {

  title = "Customers List";
  people: ICustomer[];
  // @Output() customerDetail = new EventEmitter <any[]>();
  constructor (private dataService: DataService) { 
  }
  ngOnInit(): void {
  	this.dataService.getCustomers()
    .subscribe((customers:ICustomer[])=> this.people=customers );
    console.log(this.people);
  }

}
