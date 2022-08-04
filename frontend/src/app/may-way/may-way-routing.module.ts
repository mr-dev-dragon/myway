import { MainProfileComponent } from './components/resume-profiles/main-profile/main-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcceuilComponent } from './components/accueil/acceuil/acceuil.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListOffreComponent } from './components/offres/list-offre/list-offre.component';

const routes: Routes = [
  {path:'navbar', 
  component:NavbarComponent},
  {path:'footer',
  component:FooterComponent },
  {path:'accueil', 
  component:AcceuilComponent},
  {
    path:'offres',
    component:ListOffreComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MayWayRoutingModule { }
