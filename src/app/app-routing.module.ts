import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { AuthGuard } from './authentification/Guard/auth.guard.guard';
import { UtilisateursComponent } from './User/utilisateurs/utilisateurs.component';
import { EvenementComponent } from './Evenements/evenement/evenement.component';
import { GroupeComponent } from './Groupes/groupe/groupe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { BoiteDeReceptionComponent } from './User/utilisateurs/Message/boiteDeReception/boite-de-reception/boite-de-reception.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'utilisateur/:id', component:UtilisateursComponent,canActivate :[AuthGuard]},
  {path:'boiteReception', component:BoiteDeReceptionComponent},
  {path:'evenement', component:EvenementComponent},
  {path:'groupe', component:GroupeComponent},
  //! a mettre a la fin sinon il ce met en page par default! 
  { path: '**', component: PageNotFoundComponent }, 
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
