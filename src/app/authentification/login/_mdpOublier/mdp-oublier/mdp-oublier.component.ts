import { Component, OnInit } from '@angular/core';
import { PopUpComponent } from 'src/app/contact/PopUp/pop-up/pop-up.component';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// EmailJS
import emailjs from 'emailjs-com';
// Material
import { MatDialog } from '@angular/material/dialog';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-mdp-oublier',
  templateUrl: './mdp-oublier.component.html',
  styleUrls: ['./mdp-oublier.component.scss']
})
export class MdpOublierComponent implements OnInit {
  // Déclaration des variables pour le formulaire et les messages.
  MdpForm!: FormGroup;
  messageSent: boolean = false; // Flag pour vérifier si le message a été envoyé
  user_email!: string; // Variable pour l'email de l'utilisateur


  constructor(
    private popUp: MatDialog, // Service MatDialog pour les pop-ups
    private router: Router,
    private formBuilder: FormBuilder, // FormBuilder pour construire le formulaire réactif
    private recaptchaV3Service: ReCaptchaV3Service //! .....Integration recaptcha......
  ) { }

  ngOnInit(): void {
    // Initialisation du formulaire avec des validateurs
    this.MdpForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],

    });
  }

  onSubmit(): void {
    // Méthode appelée lors de la soumission du formulaire OnSubmit
    if (this.MdpForm.valid) {
      //! .....Integration recaptcha...... 
      this.recaptchaV3Service.execute('importantAction')
        .subscribe((token: string) => {
          console.log(`Token [${token}] generated`);
          // en gros le recapcha envoie un token juste pour verifier si le nav du client c'est l enregistrer !
          //! .....Integration recaptcha......
          // Envoi du formulaire si toutes les validations sont passées
          emailjs.sendForm('service_niz5vsh', 'template_7k1e3no', '#monID', 'LmI4E7tIotERZQZ-p')
            .then((response) => {
              this.openDialog('Envoyer !', 'Votre message a bien été envoyé.');

              this.messageSent = true
              // Réinitialisation du formulaire c'est les bonne pratique 
              this.MdpForm.reset();

            }, (error) => {
              console.log('Erreur lors de l\'envoi :', error);

              this.openDialog('erreur', error);
            });
        });
    }
  }
  openDialog(title: string, message: string): void {
    // Méthode pour ouvrir un pop-up avec un titre et un message
    this.popUp.open(PopUpComponent, {
      data: { title, message }
    });
  }
}


