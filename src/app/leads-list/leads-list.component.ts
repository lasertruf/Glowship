import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { VarsService } from '../vars.service';

export interface data {
  LeadMobile: string;
  ReceivedOn: string;
  LeadName : string;
  LeadZip : string;
  Status : string;
  AssignedOn : string;
  AssignedBy : string;
  SPName : string;
  SPNumber : string;
}



const ELEMENT_DATA: data[] = [
  {LeadMobile: '9846372633', ReceivedOn: ("June 30 2021 23:55") , LeadName : "Lead Name 1",
  LeadZip : '110032',   Status:'Hot', AssignedOn: ( "June 30 2021 23:55"), AssignedBy :'admin@email.com',
  SPName:"Raju Bhaiya", SPNumber:'1233211233'},

{LeadMobile: '9846200000', ReceivedOn: ("July 3 2021 13:55") , LeadName : 'Apple Sauce',
LeadZip : '110022', Status:'Warm', AssignedOn: ( "June 30 2021 23:55"), AssignedBy :'admin@email.com',
SPName:"Ramu", SPNumber:'1233211233'},

{LeadMobile: '9846200000', ReceivedOn: ("July 3 2021 13:55") , LeadName : 'Candy Man',
LeadZip : '110022', Status:'Cold', AssignedOn: ( "June 30 2021 23:55"), AssignedBy :'admin@email.com',
SPName:"Bunty", SPNumber:'1233211233'},

{LeadMobile: '9846200000', ReceivedOn: ("July 3 2021 13:55") , LeadName : 'Random Name',
LeadZip : '110022', Status:'Hot', AssignedOn: ( "July 30 2021 23:55"), AssignedBy :'admin@email.com',
SPName:"Chotu", SPNumber:'1233211233'},

{LeadMobile: '9846200000', ReceivedOn: ("July 3 2021 13:55") , LeadName : 'Lead Name 2',
LeadZip : '110022', Status:'Warm', AssignedOn: ( "May 12 2021 23:55"), AssignedBy :'admin@email.com',
SPName:"Pappu", SPNumber:'1233211233'},


];


@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {

  
  isCallLeads = this.vs.isCallLeadsVar;
  isLeadsList = this.vs.isLeadsListVar;


  displayedColumns2: string[] = [
    'LeadMobile', 'ReceivedOn', 'LeadName', 'LeadZip', 'Status','AssignedOn','AssignedBy','SPName','SPNumber' 
  ];

  displayedColumns: string[] = ['LeadMobile', 'ReceivedOn', 'LeadName', 'LeadZip', 'Status', 'AssignedOn', 'AssignedBy','SPName','SPNumber' ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
  constructor(public vs : VarsService) { }

  ngOnInit(): void {

    
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
