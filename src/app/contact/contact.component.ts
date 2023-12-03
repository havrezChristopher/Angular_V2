import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormServiceService } from './contactForm/Services/contact-form.service.service';
// Teste Matherial
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from './PopUp/pop-up/pop-up.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  messageSent: boolean = false;
  messageErreur!: string;
  messageSuccess!: string;

  constructor(
    private popUp: MatDialog,
    private formBuilder: FormBuilder,
    private contactService: ContactFormServiceService // Service pour gérer l'envoi des données
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      // Ajouter d autre champs !
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.sendMessage(this.contactForm.value).subscribe({
        next: (data) => {
          this.messageSent = true;
          this.openDialog('Succès', 'Votre message a bien été envoyé.');
          console.log(data);

          // Réinitialiser le formulaire car bonne Pratique !!!
          this.contactForm.reset();
        },
        error: (error) => {
          
          //!Astuce pour utiliser les message erreur du back end  
          let errorMessage = 'Une erreur est survenue lors de l\'envoi du message.';
          if (error.error && error.error.message) {
            // Utiliser le message d'erreur du backend si disponible
            errorMessage = error.error.message;
          }
          //!Astuce pour utiliser les message erreur du back end  

          this.openDialog('Erreur', 'Une erreur est survenue lors de lenvoi du message.');


        }
        // faire le compled pour integrer d autre chose ! 😋
        // complete: () => {
        //  Actions pour l'Observable
        // }
      });
    }
  }
  // Teste PopUp Matherial
  openDialog(title: string, message: string): void {
    this.popUp.open(PopUpComponent, {
      data: { title, message }
    });
  }

}









