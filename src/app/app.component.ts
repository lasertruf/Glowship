import { Component, OnInit } from '@angular/core';
import { VarsService } from './vars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Glowship';
  constructor(public vs : VarsService){}
  
  ngOnInit(){

setInterval(() => {
  this.isCallLeads = this.vs.isCallLeadsVar;
  this.isLeadsList = this.vs.isLeadsListVar;
  this.print();
}, 1000);

  }

  isCallLeads : boolean = this.vs.isCallLeadsVar;
  isLeadsList : boolean = this.vs.isLeadsListVar;

  print(){
    console.log(this.isCallLeads+ "var");
    
  }
}