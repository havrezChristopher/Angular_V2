import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormServiceService } from './Services/contact-form.service.service';
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
  messageErreur!:string
  messageSuccess!:string

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
          // Réinitialiser le formulaire car bonne Pratique !!!
          this.contactForm.reset();
        },
        error: (error) => {
          
            this.openDialog('Erreur', 'Une erreur est survenue lors de l envoi du message.');
        
        }
        // faire le compled pour integrer d autre chose ! 😋
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









