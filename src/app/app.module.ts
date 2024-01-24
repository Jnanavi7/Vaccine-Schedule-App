import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildDetailsComponent } from './child-details/child-details.component';
import { HeaderComponent } from './header/header.component';
import { VaccineDetailsComponent } from './vaccine-details/vaccine-details.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildDetailsComponent,
    HeaderComponent,
    VaccineDetailsComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
