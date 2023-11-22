// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from './Services/auth-service.service';
// import { Router } from '@angular/router';



// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss']
// })
// export class RegisterComponent implements OnInit {
//   signupForm!: FormGroup;
//   loginError!: string;
//   signupError!: string;
//   signupSuccess!: string;
//   constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

//   ngOnInit(): void {
//     this.signupForm = this.formBuilder.group({
//       nom: [null, [Validators.required]],
//       prenom: [null, [Validators.required]],
//       emailUtilisateur: [null, [Validators.required, Validators.email]],
//       motsDePasse: [null, [Validators.required, Validators.minLength(6)]],
//       dateDeNaissance:[null],
//       role:[null],
//       genre:[null],
//       facebook:[null],
//         snapchat:[null],
//         instagram:[null],
//         twitter:[null],
//         telephone:[null],
//         gsm:[null],
//     });
//   }


//   signup(): void {
//     if (this.signupForm.valid) {
//       const { email, password } = this.signupForm.value;
//       this.authService.signup(this.signupForm.value).subscribe({
//         next: (response) => {

//           this.signupSuccess = 'Inscription réussie !';
//           this.router.navigate(['/dashboard']); // Décommentez pour rediriger
//         },
//         error: (error) => {
//           this.signupError = 'Erreur lors de l\'inscription.';
//         }
//       });
//     }
//   }
// }

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
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    // Initialisation du formulaire avec ses champs et validations.
    // Les champs comprennent le nom, prénom, email, mot de passe, etc.
    this.signupForm = this.formBuilder.group({
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      emailUtilisateur: [null, [Validators.required, Validators.email]],
      motsDePasse: [null, [Validators.required, Validators.minLength(6)]],
      // Autres champs sans validations spécifiques
      dateDeNaissance:[null],
      role:[null],
      genre:[null],
      facebook:[null],
      snapchat:[null],
      instagram:[null],
      twitter:[null],
      telephone:[null],
      gsm:[null],
    });
  }

  // Méthode pour gérer l'inscription
  signup(): void {
    // Vérifie si le formulaire est valide
    if (this.signupForm.valid) {
      // Appelle la méthode d'inscription d'AuthService et souscrit à la réponse
      this.authService.signup(this.signupForm.value).subscribe({
        next: (response) => {
          // En cas de succès, affiche un message et redirige vers le tableau de bord.
          this.signupSuccess = 'Inscription réussie !';
          this.router.navigate(['/profileUtilisateur']); // Redirection après l'inscription
        },
        error: (error) => {
          // En cas d'échec, affiche un message d'erreur.
          this.signupError = 'Erreur utilisateur (utilisateur) deja inscrit';
        }
      });
    }
  }
}
