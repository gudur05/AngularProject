import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from 'src/student.module';
import { VehicleModule } from 'src/vehicle.module';
import {HeaderComponent} from './header/header.component';
import {NavComponent} from './nav/nav.component';
import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    VehicleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
