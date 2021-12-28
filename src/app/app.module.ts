import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeListComponent } from './employe-list/employe-list.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
   routingcomponents,
   
   EmployeListComponent,
   NotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
