
import { LOCALE_ID, NgModule } from '@angular/core';
// LOCALE_ID pour le provider 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { TokenInterceptor } from './demos/demo22/interceptors/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Nav_Barre/home/home.component';
import { GallerieComponent } from './Nav_Barre/gallerie/gallerie.component';
import { ReservationComponent } from './Nav_Barre/reservation/reservation.component';
import { ContactComponent } from './Nav_Barre/contact/contact.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NavbarComponent } from './Nav_Barre/navbar/navbar.component';
import { FooterComponent } from './Footers/footer/footer.component';
import { ProduitsComponent } from './Nav_Barre/produits/produits.component';
import { ServicesComponent } from './Nav_Barre/services/services.component';
import { CreationCompteComponent } from './creation-compte/creation-compte.component';




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
  providers: [  // Permet d'injecter la langue FR partout dans l'application
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    // provide: indique que vous souhaitez enregistrer un intercepteur pour les requête HTTP
    // useCLass: la classe de votre intercepteur personnalité qu'on souhaite utiliser
    // multi: enregistrer plusieurs intercepteurs de type HTTP_INTERCEPTORS
    // • true : vous pouvez enregistrer plusieurs intercepteurs dans le même provider
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
