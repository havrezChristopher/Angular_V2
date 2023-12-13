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
import { MdpOublierComponent } from './authentification/login/_mdpOublier/mdp-oublier/mdp-oublier.component';
import { ResetPassComponent } from './authentification/login/_mdpOublier/Reset-password/reset-pass/reset-pass.component';
//! ***************************************** authentification ***********************************
//? ***********************************Menu DashBoard*********************************
import { UtilisateursComponent } from './User/utilisateurs/Utilisateur/utilisateurs.component';
import { EvenementComponent } from './Evenements/evenement/evenement.component';
// Message
import { BoiteDeReceptionComponent } from './User/utilisateurs/Message/boiteDeReception/boite-de-reception/boite-de-reception.component';
// Groupe
import { MesgroupComponent } from './User/utilisateurs/Groupe/mesgroup/mesgroup.component';
// Paramettre
import { ParametteComponent } from './User/utilisateurs/Paramettres/paramette/paramette.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatAppComponent } from './_Socket.io/chat-app/chat-app.component';
import { UploadComponent } from './_Upload/upload/upload.component';
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
  // Forgot
  { path: 'forgot-password', component: MdpOublierComponent },
  // Reset
  { path: 'reset-password', component: ResetPassComponent },

  //! ***auth***
  // Guard Route proteger 
  { path: 'utilisateur/:id', component: UtilisateursComponent, canActivate: [AuthGuard] },
  { path: 'utilisateur/:id/mesgroupe', component: MesgroupComponent, canActivate: [AuthGuard] },
  { path: 'utilisateur/:id/boiteReception', component: BoiteDeReceptionComponent, canActivate: [AuthGuard] },
  { path: 'utilisateur/:id/paramettre', component: ParametteComponent, canActivate: [AuthGuard] },
  { path: 'utilisateur/:id/chat', component: ChatAppComponent, canActivate: [AuthGuard] },
  { path: 'utilisateur/:id/paramettre/upload', component: UploadComponent, canActivate: [AuthGuard] },
  // Routes Dynamiques avec Paramètres :
  // :id est un paramètre qui peut changer. 
  // Par exemple, /utilisateur/1/mesgroupe et /utilisateur/2/mesgroupe chargeront le même composant (MesgroupComponent) 
  // avec un ID utilisateur différent.
  //! a mettre a la fin sinon il ce met en page par default! 
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
