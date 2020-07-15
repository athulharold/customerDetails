import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { OrdersRoutingModule } from './orders-routing.module';
import {SharedModule} from '../shared/shared.module';
import {OrdersComponent} from './orders.component';

// import {CustomersComponent} from '../customers/customers.component';
// import {CustomerListComponent} from '../customer-list/customer-list.component';
@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    FormsModule

  ]
})
export class OrdersModule { }
