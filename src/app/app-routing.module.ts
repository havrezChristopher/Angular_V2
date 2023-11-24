import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { ProduitsComponent } from './produits/produits.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { AuthGuard } from './authentification/Guard/auth.guard.guard';
import { UtilisateursComponent } from './User/utilisateurs/utilisateurs.component';
import { EvenementComponent } from './Evenements/evenement/evenement.component';
import { MessageComponent } from './Messages/message/message.component';
import { GroupeComponent } from './Groupes/groupe/groupe.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'gallerie', component:GallerieComponent},
  {path:'produits', component:ProduitsComponent},
  {path:'services', component:ServicesComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'utilisateur', component:UtilisateursComponent},
  {path:'evenement', component:EvenementComponent},
  {path:'message', component:MessageComponent},
  {path:'groupe', component:GroupeComponent},
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
