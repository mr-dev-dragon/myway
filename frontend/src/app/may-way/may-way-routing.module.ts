import { MainProfileComponent } from './components/resume-profiles/main-profile/main-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/resume-profiles/test/test.component';

const routes: Routes = [
  {
    path: 'cv',
    component: MainProfileComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayWayRoutingModule { }
