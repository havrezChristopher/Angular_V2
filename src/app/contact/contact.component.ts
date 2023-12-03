import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormServiceService } from './Services/contact-form.service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  messageSent: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactFormServiceService // Service pour gérer l'envoi des données
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.sendMessage(this.contactForm.value).subscribe({
        next: (response) => {
          this.messageSent = true;
          // Réinitialiser le formulaire car bonne Pratique
          this.contactForm.reset();
        },
        error: (error) => {
          
          console.error('Error sending message:', error);
        }
      });
    }
  }
}









