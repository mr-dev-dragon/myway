import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeProfilesRoutingModule } from './resume-profiles-routing.module';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { SuggestionComponent } from './suggestion/suggestion.component';


@NgModule({
  declarations: [
    MainProfileComponent,
    SuggestionComponent
  ],
  imports: [
    CommonModule,
    ResumeProfilesRoutingModule
  ]
})
export class ResumeProfilesModule { }
