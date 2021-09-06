import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatMenuModule} from '@angular/material/menu'; 


import { CallLeadsComponent } from './call-leads/call-leads.component';
import { CLeadsFormComponent } from './c-leads-form/c-leads-form.component';
import { LeadsListComponent } from './leads-list/leads-list.component'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CallLeadsComponent,
    CLeadsFormComponent,
    LeadsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule,
    MatMenuModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
