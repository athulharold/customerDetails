import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module'; 

@NgModule({
  declarations: [
    AppComponent
  ], 
  imports: [
    BrowserModule,
     CustomersModule,    
     FormsModule,
     CoreModule,
     HttpClientModule,
     AppRoutingModule,
     OrdersModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
