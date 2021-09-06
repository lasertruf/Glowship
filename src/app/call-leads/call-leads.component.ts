import { ViewEncapsulation } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { VarsService } from '../vars.service';

@Component({
  selector: 'app-call-leads',
  templateUrl: './call-leads.component.html',
  styleUrls: ['./call-leads.component.scss'],
 
})
export class CallLeadsComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<any>;

  isCallLeads = this.vs.isCallLeadsVar;
  isLeadsList = this.vs.isLeadsListVar;
  
  activeTab: number = 1;
  constructor( public vs : VarsService ) { }

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
  this.isCallLeads=true;
  this.isLeadsList=false;
  this.vs.setvars(this.isCallLeads,this.isLeadsList);
}


onLeadsList(){
  this.isLeadsList=true;
  this.isCallLeads=false;
  this.vs.setvars(this.isCallLeads,this.isLeadsList);


}

onClickInfo(){
    
}

  
}
