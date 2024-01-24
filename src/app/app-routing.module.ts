import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildDetailsComponent } from './child-details/child-details.component';


const routes: Routes = [

    {path:'child-details',component:ChildDetailsComponent},
 
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }