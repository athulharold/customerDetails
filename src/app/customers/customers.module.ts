import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent }  from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FilterComponentComponent } from './customer-list/filter-component/filter-component.component';
import { CustomersRoutingModule } from './customers-routing.module';
@NgModule({
  imports:      [ CommonModule, SharedModule, FormsModule, CustomersRoutingModule ],
  declarations: [ CustomersComponent, CustomerListComponent, FilterComponentComponent ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }