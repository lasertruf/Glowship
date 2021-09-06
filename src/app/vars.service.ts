import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarsService {

  constructor() {

   }
isCallLeadsVar : boolean = true;
isLeadsListVar : boolean = false;

   setvars(cl:boolean,ll:boolean)
   {
         this.isCallLeadsVar=cl;
         this.isLeadsListVar=ll;
   }


   
}
