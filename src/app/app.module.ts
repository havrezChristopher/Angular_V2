
import { LOCALE_ID, NgModule } from '@angular/core';
// LOCALE_ID pour le provider 
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { TokenInterceptor } from './demos/demo22/interceptors/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// Module re captch
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
// Variable d environement 
import { environment } from 'src/environments/environment.development';
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
import { PopUpComponent } from './contact/PopUp/pop-up/pop-up.component';
// Menu Dashbord message
import { BoiteDeReceptionComponent } from './User/utilisateurs/Message/boiteDeReception/boite-de-reception/boite-de-reception.component';
import { MesgroupComponent } from './User/utilisateurs/Groupe/mesgroup/mesgroup.component';

import { ParametteComponent } from './User/utilisateurs/Paramettres/paramette/paramette.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// Evenements
import { EvenementComponent } from './Evenements/evenement/evenement.component';
import { EvenementTop1Component } from './Evenements/evenement-top1/evenement-top1.component';
import { EvenementTop2Component } from './Evenements/evenement-top2/evenement-top2.component';
import { EvenementTop3Component } from './Evenements/evenement-top3/evenement-top3.component';
// Files Actualiter
import { FilesActualiterComponent } from './FilesActualiter/files.actualiter/files.actualiter.component';
// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AboutComponent } from './about/about.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';







@NgModule({
  declarations: [
    AppComponent,
    // Nav-Barre
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ReservationComponent,
    ContactComponent,

    EvenementComponent,
    // Profile
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    UtilisateursComponent,
    //* Menu DashBord 
    // Message 
    BoiteDeReceptionComponent,
    // Groupe
    MesgroupComponent,
    // Paramettre
    ParametteComponent,
    // Pages Not fund
    PageNotFoundComponent,
    PopUpComponent,
    EvenementTop1Component,
    EvenementTop2Component,
    EvenementTop3Component,
    FilesActualiterComponent,
    MesgroupComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    // Angular Matherial
    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    RecaptchaV3Module,
    MatCardModule,
    MatTabsModule



  ],
  providers: [  // Permet d'injecter la langue FR partout dans l'application
    { provide: LOCALE_ID, useValue: 'fr-FR' },

    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKey, }

    // provide: indique que vous souhaitez enregistrer un intercepteur pour les requête HTTP
    // useCLass: la classe de votre intercepteur personnalité qu'on souhaite utiliser
    // multi: enregistrer plusieurs intercepteurs de type HTTP_INTERCEPTORS
    // • true : vous pouvez enregistrer plusieurs intercepteurs dans le même provider
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
