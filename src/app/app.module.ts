
import { LOCALE_ID, NgModule } from '@angular/core';
// LOCALE_ID pour le provider 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { TokenInterceptor } from './demos/demo22/interceptors/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProduitsComponent } from './produits/produits.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { SharedModule } from './shared/shared.module';
import { UtilisateursComponent } from './User/utilisateurs/utilisateurs.component';
import { MessageComponent } from './Messages/message/message.component';
import { GroupeComponent } from './Groupes/groupe/groupe.component';
import { EvenementComponent } from './Evenements/evenement/evenement.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GallerieComponent,
    ProduitsComponent,
    ServicesComponent,
    ReservationComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UtilisateursComponent,
    MessageComponent,
    GroupeComponent,
    EvenementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //! import SharedModule pour utiliser tout ce quil export !
    SharedModule
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
