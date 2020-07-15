import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html'
})
export class FilterComponentComponent implements OnInit {

  @Output() filtered=new EventEmitter<string>();
  constructor() { }
  private _filterText: string;
  @Input() get filterText(){
  	return this._filterText;
  }
  set filterText(value: string){
  	this._filterText=value;
  	this.filtered.emit(this.filterText);
  }
  ngOnInit(): void {
  }

}
