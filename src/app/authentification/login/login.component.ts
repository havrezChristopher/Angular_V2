
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { AuthService } from '../register/Services/auth-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// Matherial

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Déclare une variable pour la lier au formulaire FormGroup
  loginForm!: FormGroup;
  errorMessage!: string;
  idUser!: number;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private _nomActivatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {


    this.loginForm = this.formBuilder.group({
      emailUtilisateur: ['', [Validators.required, Validators.email]],
      motsDePasse: ['', Validators.required]
    });
  }


  // Fonction pour gérer le processus de connexion.
  login(): void {

    if (this.loginForm.valid) {
      // Destructure les valeurs du formulaire pour faciliter l'accès et les intégrer a des constante
      const { emailUtilisateur, motsDePasse } = this.loginForm.value;
      // Appelle la méthode signin d'AuthService et souscrit à la réponse.
      this.authService.signin(emailUtilisateur, motsDePasse).subscribe({
        next: (response) => {
          this.authService.saveAuthToken(response.token); // Enregistrement du token
          localStorage.setItem('authToken', response.token)
          // Après une connexion réussie
          this.router.navigate(['utilisateur/', response.idUtilisateur]); // Naviguer avec l'ID
          localStorage.setItem('authToken', response.token); // Stocke l'ID utilisateur


          console.log('Recuperation token ==> ', response.token);

        },
        error: (error) => {
          this.errorMessage = "Échec de la connexion : " + (error.error.message || "Une erreur est survenue.");
        }
      });
    }
  }
}

// Resumer de ma fonction
//! Vérifie si le formulaire est valide.
//! Récupère les valeurs de l'email et du mot de passe depuis le formulaire.
//! Appelle signin sur AuthService avec ces valeurs et souscrit à la réponse.
//! En cas de succès, enregistre le token reçu,
//!  navigue vers la page de profil de l'utilisateur avec son ID,
//! et stocke le token dans localStorage.
//! En cas d'erreur, met à jour le message d'erreur.
