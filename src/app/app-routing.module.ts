import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildDetailsComponent } from './child-details/child-details.component';
import { VaccineDetailsComponent } from './vaccine-details/vaccine-details.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
    {path:'vaccine-details', component:VaccineDetailsComponent},
    {path:'child-details',component:ChildDetailsComponent},
    {path:'view', component:ViewComponent}
 
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }