import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Nav_Barre/home/home.component';
import { GallerieComponent } from './Nav_Barre/gallerie/gallerie.component';
import { ReservationComponent } from './Nav_Barre/reservation/reservation.component';
import { ContactComponent } from './Nav_Barre/contact/contact.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProduitsComponent } from './Nav_Barre/produits/produits.component';
import { ServicesComponent } from './Nav_Barre/services/services.component';
import { CreationCompteComponent } from './creation-compte/creation-compte.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'gallerie', component:GallerieComponent},
  {path:'produits', component:ProduitsComponent},
  {path:'services', component:ServicesComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'contact', component:ContactComponent},
  {path:'connexion', component:ConnexionComponent},
  {path:'creation-compte', component:CreationCompteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
