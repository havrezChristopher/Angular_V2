import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
//! ***************************************** authentification ***********************************
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { AuthGuard } from './authentification/Guard/auth.guard.guard';
//! ***************************************** authentification ***********************************
//? ***********************************Menu DashBoard*********************************
import { UtilisateursComponent } from './User/utilisateurs/utilisateurs.component';
import { EvenementComponent } from './Evenements/evenement/evenement.component';
// Message
import { BoiteDeReceptionComponent } from './User/utilisateurs/Message/boiteDeReception/boite-de-reception/boite-de-reception.component';
// Groupe
import { MesgroupComponent } from './User/utilisateurs/Groupe/mesgroup/mesgroup.component';
// Paramettre
import { ParametteComponent } from './User/utilisateurs/Paramettres/paramette/paramette.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatAppComponent } from './_Socket.io/chat-app/chat-app.component';
//? ***********************************Menu DashBoard*********************************

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'evenement', component: EvenementComponent },
  //! ***auth*** 
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  //! ***auth***
  // Guard Route proteger 
  { path: 'utilisateur/:id', component: UtilisateursComponent, canActivate: [AuthGuard] },
  { path: 'utilisateur/:id/mesgroupe', component: MesgroupComponent },
  { path: 'utilisateur/:id/boiteReception', component: BoiteDeReceptionComponent },
  { path: 'utilisateur/:id/paramettre', component: ParametteComponent },
  { path: 'utilisateur/:id/chat', component: ChatAppComponent },

  //! a mettre a la fin sinon il ce met en page par default! 
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
