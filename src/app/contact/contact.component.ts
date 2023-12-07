import { Component, OnInit } from '@angular/core';
import { PopUpComponent } from './PopUp/pop-up/pop-up.component';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// EmailJS
import emailjs from 'emailjs-com';
// Material
import { MatDialog } from '@angular/material/dialog';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact', // Sélecteur CSS du composant
  templateUrl: './contact.component.html', // Template HTML associé
  styleUrls: ['./contact.component.scss'] // Styles SCSS associés
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup; // Déclaration du FormGroup pour le formulaire
  messageSent: boolean = false; // Flag pour vérifier si le message a été envoyé
  user_name!: string; // Variable pour le nom d'utilisateur
  user_email!: string; // Variable pour l'email de l'utilisateur
  message!: string; // Variable pour le message

  constructor(
    private popUp: MatDialog, // Service MatDialog pour les pop-ups
    private formBuilder: FormBuilder, // FormBuilder pour construire le formulaire réactif
    private recaptchaV3Service: ReCaptchaV3Service //! .....Integration recaptcha......
  ) { }

  ngOnInit(): void {
    // Initialisation du formulaire avec des validateurs
    this.contactForm = this.formBuilder.group({
      user_name: ['', Validators.required],
      lastName: ['', Validators.required],
      user_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // Méthode appelée lors de la soumission du formulaire OnSubmit
    if (this.contactForm.valid) {
      //! .....Integration recaptcha...... 
      this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
      // en gros le recapcha envoie un token juste pour verifier si le nav du client c'est l enregistrer !
      //! .....Integration recaptcha......
      // Envoi du formulaire si toutes les validations sont passées
      emailjs.sendForm('service_niz5vsh', 'template_7k1e3no', '#monID', 'LmI4E7tIotERZQZ-p')
        .then((response) => {
          this.openDialog('Envoyer !', 'Votre message a bien été envoyé.');
          console.log('Email successfully sent!', response.status, response.text);
          this.messageSent=true
          // Réinitialisation du formulaire c'est les bonne pratique 
          this.contactForm.reset();
        }, (error) => {
          console.log('Erreur lors de l\'envoi :', error);
          
          this.openDialog('erreur', error);
        });
      });
    }
  }
 // faire le compled pour integrer d autre chose ! 😋
  // complete: () => {
  //  Actions pour l'Observable
  // }
  openDialog(title: string, message: string): void {
    // Méthode pour ouvrir un pop-up avec un titre et un message
    this.popUp.open(PopUpComponent, {
      data: { title, message }
    });
  }


}

  //*************************************************  Methode d envoie de message Sans EmailJS****************************************************************************************
  // if (this.contactForm.valid) {
  //   this.contactService.sendMessage(this.contactForm.value).subscribe({
  //     next: (data) => {
  //       this.messageSent = true;
  //       this.openDialog('Succès', 'Votre message a bien été envoyé.');
  //     },
  //     error: (error) => {

  //       //!Astuce pour utiliser les message erreur du back end  
  //       let errorMessage = 'Une erreur est survenue lors de l\'envoi du message.';
  //       if (error.error && error.error.message) {
           // Utiliser le message d'erreur du backend si disponible
  //         errorMessage = error.error.message;
  //       }
  //       //!Astuce pour utiliser les message erreur du back end  
  //*************************************************  Methode d envoie de message simple ****************************************************************************************

