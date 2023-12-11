
// LOCALE_ID pour le provider 
import { LOCALE_ID, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { TokenInterceptor } from './demos/demo22/interceptors/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// Module re captch
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
// Variable d environement 
import { environment } from 'src/environments/environment.development';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//? *******************Chat Socket io****************************************************************** 
import { ChatAppComponent } from './_Socket.io/chat-app/chat-app.component';
//? *******************Chat Socket io******************************************************************
// Component Base
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from './shared/shared.module';
// Evenements
import { EvenementComponent } from './Evenements/evenement/evenement.component';
import { EvenementTop1Component } from './Evenements/evenement-top1/evenement-top1.component';
import { EvenementTop2Component } from './Evenements/evenement-top2/evenement-top2.component';
import { EvenementTop3Component } from './Evenements/evenement-top3/evenement-top3.component';
// Files Actualiter
import { FilesActualiterComponent } from './FilesActualiter/files.actualiter/files.actualiter.component';
//! ************************Authentification************************************************************ 
import { LoginComponent } from './authentification/login/login.component';
import { PopUpComponent } from './contact/PopUp/pop-up/pop-up.component';
import { RegisterComponent } from './authentification/register/register.component';
import { UtilisateursComponent } from './User/utilisateurs/utilisateurs.component';
import { MdpOublierComponent } from './authentification/login/_mdpOublier/mdp-oublier/mdp-oublier.component';
import { ResetPassComponent } from './authentification/login/_mdpOublier/Reset-password/reset-pass/reset-pass.component';
//! ************************Authentification************************************************************
//**************************** */ Menu Dashbord message ************************************************
//? ***Message*** 
import { BoiteDeReceptionComponent } from './User/utilisateurs/Message/boiteDeReception/boite-de-reception/boite-de-reception.component';
import { MesgroupComponent } from './User/utilisateurs/Groupe/mesgroup/mesgroup.component';
//? *** Paramettre *** 
import { ParametteComponent } from './User/utilisateurs/Paramettres/paramette/paramette.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//**************************** */ Menu Dashbord message ************************************************
import { UploadComponent } from './_Upload/upload/upload.component';

//! Material Ui
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { CdkMenuModule } from '@angular/cdk/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';








@NgModule({
  declarations: [
    AppComponent,
    //! upload Services
    UploadComponent,
    //! upload Services 
    // -----Base composant-----
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ReservationComponent,
    ContactComponent,
    EvenementTop1Component,
    EvenementTop2Component,
    EvenementTop3Component,
    FilesActualiterComponent,
    // -----Base composant-----

    EvenementComponent,
    //! ***Authentification***
    LoginComponent,
    MdpOublierComponent,
    ResetPassComponent,
    RegisterComponent,
    PopUpComponent,
    UtilisateursComponent,
    //! ***Authentification***

    //? ** Menu DashBord ***
    // Message 
    BoiteDeReceptionComponent,
    // Groupe
    MesgroupComponent,
    // Paramettre
    ParametteComponent,
    //? ** Menu DashBord ***

    // Pages Not fund
    PageNotFoundComponent,
    //! Socket io 
    ChatAppComponent,
    UploadComponent,
    //! Socket io



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
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    CdkMenuModule,
    CdkStepperModule,





  ],
  providers: [  // Permet d'injecter la langue FR partout dans l'application
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    //! Provide recaptchat 
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha.siteKey, }
    //! Provide recaptchat
    // provide: indique que vous souhaitez enregistrer un intercepteur pour les requête HTTP
    // useCLass: la classe de votre intercepteur personnalité qu'on souhaite utiliser
    // multi: enregistrer plusieurs intercepteurs de type HTTP_INTERCEPTORS
    // • true : vous pouvez enregistrer plusieurs intercepteurs dans le même provider
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
