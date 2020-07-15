import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from './shared/shared.module';
import { FilterComponentComponent } from './customer-list/filter-component/filter-component.component';
import {FormsModule} from '@angular/forms';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerListComponent, 
    FilterComponentComponent
  ],
  imports: [
    BrowserModule,
     SharedModule,
     FormsModule,
     CoreModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
