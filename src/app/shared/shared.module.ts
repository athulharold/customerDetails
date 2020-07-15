import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CapitalizePipe} from './capitalize.pipe';
import {SorterService} from '../core/sorter.service'
import {DataService} from '../core/data.service'
@NgModule({
  declarations: [ CapitalizePipe],
  imports: [
    CommonModule
 
  ],
  exports: [CapitalizePipe]
})
export class SharedModule { }
