import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-call-leads',
  templateUrl: './call-leads.component.html',
  styleUrls: ['./call-leads.component.css']
})
export class CallLeadsComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<any>;
  constructor() { }

  leadsarr =  [{'number':9863789920,'days':"3d"},{'number':9863789920,'days':"2d"},{'number':9863789920,'days':"2d"},
               {'number':9863789920,'days':"2d"},{'number':9863789920,'days':"2d"},{'number':9863789920,'days':"2d"},
               {'number':9863789920,'days':"2d"},{'number':9863789920,'days':"2d"},{'number':9863789920,'days':"2d"},
               {'number':9863789920,'days':"2d"}];





  sideToggle:boolean = false;
  ngOnInit(): void {
    
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );


  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  

onCallLeads()
{
  
}
  
}
