import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo: '/departments',pathMatch: 'full'},
  {path:'departments',component:DepartmentListComponent},
  {path:'departments/:id',component:DepartmentDetailsComponent, 
  children:[
    {path:'overview',component:DepartmentOverviewComponent },
    {path:'contact',component:DepartmentContactComponent}
  ]},
  {path:'employes',component:EmployeListComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[DepartmentListComponent,EmployeListComponent,NotFoundComponent,DepartmentDetailsComponent,DepartmentOverviewComponent,DepartmentContactComponent]