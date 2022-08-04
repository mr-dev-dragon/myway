import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MayWayModule } from './may-way/may-way.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    ButtonModule,
    RippleModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MayWayModule


  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
