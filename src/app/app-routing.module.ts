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
import { MessageComponent } from './User/utilisateurs/Messages/message/message.component';
import { GroupeComponent } from './Groupes/groupe/groupe.component';
import { TableauDeBordComponent } from './User/utilisateurs/TableauDeBord/tableau-de-bord/tableau-de-bord.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'utilisateur', component:UtilisateursComponent},
  {path:'evenement', component:EvenementComponent},
  {path:'message', component:MessageComponent},
  {path:'groupe', component:GroupeComponent},
  {path:'tableauDeBord', component:TableauDeBordComponent},
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
