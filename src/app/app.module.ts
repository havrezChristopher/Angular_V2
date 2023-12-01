
import { LOCALE_ID, NgModule } from '@angular/core';
// LOCALE_ID pour le provider 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { TokenInterceptor } from './demos/demo22/interceptors/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { SharedModule } from './shared/shared.module';
import { UtilisateursComponent } from './User/utilisateurs/utilisateurs.component';
import { MessageComponent } from './User/utilisateurs/Messages/message/message.component';
import { GroupeComponent } from './Groupes/groupe/groupe.component';
import { EvenementComponent } from './Evenements/evenement/evenement.component';
import { TableauDeBordComponent } from './User/utilisateurs/TableauDeBord/tableau-de-bord/tableau-de-bord.component';
import { ParametteComponent } from './User/utilisateurs/Paramettres/paramette/paramette.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjoutMessageComponent } from './utilisateur/Message/ajout-message/ajout-message.component';
import { CreeMessageComponent } from './User/utilisateurs/Message/cree-message/cree-message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    TableauDeBordComponent,
    ParametteComponent,
    PageNotFoundComponent,
    AjoutMessageComponent,
    CreeMessageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    //! import SharedModule pour utiliser tout ce quil export !
    SharedModule,
    BrowserAnimationsModule
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
