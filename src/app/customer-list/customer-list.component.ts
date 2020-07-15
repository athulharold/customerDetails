import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ICustomer} from "../shared/interfaces";
import {FilterComponentComponent} from "./filter-component/filter-component.component";
import   {CapitalizePipe} from '../shared/capitalize.pipe';
import {SorterService} from '../core/sorter.service';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit,OnChanges {

  @Input() customerData : ICustomer[];
  @Input() filteredCustomers : ICustomer[];
  customersOrderTotal : number;
  currencyCode: string  = 'INR';
  // temp="";
  constructor(private sorter: SorterService) { }

  ngOnInit(): void {
  		
  }

  ngOnChanges(changes: SimpleChanges){
  		if(this.filteredCustomers){this.calculateTotal();}
  }
  calculateTotal(){
  	this.customersOrderTotal=0;
  	this.filteredCustomers.forEach((cust: ICustomer) => {
  		this.customersOrderTotal+=cust.orderTotal;
  	} )

  }
  doFilter(value:string){
  	// this.temp="Working Baby";
  	if(value){
	  	this.filteredCustomers=this.customerData.filter(
	  	(cust:ICustomer)=>{
	  		return cust.name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
	  			   cust.city.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
	  			   cust.orderTotal.toString().indexOf(value) > -1;
	  	}
	  	);
	  	
	}
	else {this.filteredCustomers=this.customerData;}
	this.calculateTotal();
  }


  sort(prop: String){
  	 this.sorter.sort(this.filteredCustomers,prop);
  	
  }

}
