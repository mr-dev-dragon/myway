import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MywayRoutingModule } from './myway-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MywayRoutingModule
  ]
})
export class MywayModule { }
