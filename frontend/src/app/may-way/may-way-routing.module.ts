import { MainProfileComponent } from './components/resume-profiles/main-profile/main-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: 'cv',
    component: MainProfileComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayWayRoutingModule { }
