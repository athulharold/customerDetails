import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SorterService} from '../core/sorter.service'
import {DataService} from '../core/data.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SorterService, DataService]
})
export class CoreModule { }
