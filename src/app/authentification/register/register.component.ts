
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './Services/auth-service.service';
import { Router } from '@angular/router';

// Définition du composant avec son sélecteur, le fichier HTML associé et le fichier de style.
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Déclaration des variables pour le formulaire et les messages.
  signupForm!: FormGroup;
  loginError!: string;
  signupError!: string;
  signupSuccess!: string;

  // Injection de FormBuilder pour la construction du formulaire,
  // Router pour la navigation, et AuthService pour la gestion des authentifications.
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    // Initialisation du formulaire avec ses champs et validations.
    // Les champs comprennent le nom, prénom, email, mot de passe, etc.
    this.signupForm = this.formBuilder.group({
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      emailUtilisateur: [null, [Validators.required, Validators.email]],
      motsDePasse: [null, [Validators.required, Validators.minLength(6)]],
      dateDeNaissance:[null, [Validators.required]],
      // Autres champs sans validations spécifiques
      role:['', [Validators.minLength(0)]],
      genre:['', [Validators.minLength(0)]],
      facebook:['', [Validators.minLength(0)]],
      snapchat:['', [Validators.minLength(0)]],
      instagram:['', [Validators.minLength(0)]],
      twitter:['', [Validators.minLength(0)]],
      telephone:['', [Validators.minLength(0)]],
      gsm:['', [Validators.minLength(0)]],
    });
  }

  // Méthode pour gérer l'inscription
  signup(): void {
    // Vérifie si le formulaire est valide
    if (this.signupForm.valid) {
      console.log(this.signupForm);
      
      // Appelle la méthode d'inscription d'AuthService et souscrit à la réponse
      this.authService.signup(this.signupForm.value).subscribe({
        next: (response) => {
          console.log('test',response);
          
          // En cas de succès, affiche un message et redirige vers login
          this.signupSuccess = 'Inscription réussie !';
          this.router.navigate(['/login']); 
        },
        error: (error) => {
          
          console.log('Erreur Inscription ...!',error);
           ;
        }
      });
    }
  }
}
