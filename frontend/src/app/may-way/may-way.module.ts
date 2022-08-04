import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MayWayRoutingModule } from './may-way-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeProfilesModule } from './components/resume-profiles/resume-profiles.module';


@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, MayWayRoutingModule, ResumeProfilesModule],
  exports: [NavbarComponent, FooterComponent, CommonModule],
})
export class MayWayModule {}
