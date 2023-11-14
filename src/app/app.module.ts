import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitsComponent } from './produits/produits.component';
import { ServicesComponent } from './services/services.component';
import { CreationCompteComponent } from './creation-compte/creation-compte.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GallerieComponent,
    ProduitsComponent,
    ServicesComponent,
    ReservationComponent,
    ContactComponent,
    ConnexionComponent,
    NavbarComponent,
    FooterComponent,
    CreationCompteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
