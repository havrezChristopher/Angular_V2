
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../register/Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Déclare une variable pour la lier au formulaire FormGroup
  loginForm!: FormGroup;
  loginError!: string;

  

  // Injecte FormBuilder pour la création de formulaires réactifs,
  // Router pour la navigation et AuthService pour la gestion de l'authentification.
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }


  ngOnInit(): void {
    // Initialise le formulaire avec les champs emailUtilisateur et motsDePasse.
    // Utilise des validateurs pour s'assurer que ces champs sont remplis correctement.
    this.loginForm = this.formBuilder.group({
      emailUtilisateur: ['', [Validators.required, Validators.email]],
      motsDePasse: ['', Validators.required]
    });
  }


  // Fonction pour gérer le processus de connexion.
  login(): void {
    // Vérifie si le formulaire est valide avant de procéder.
    if (this.loginForm.valid) {
      // Destructure les valeurs du formulaire pour faciliter l'accès.
      const { emailUtilisateur, motsDePasse } = this.loginForm.value;
      // Appelle la méthode signin d'AuthService et souscrit à la réponse.
      this.authService.signin(emailUtilisateur, motsDePasse).subscribe({
        next: (response) => {
          console.log(response);
          // stockage du token dans le session storage avec la valeur de l email
          // sessionStorage.setItem('authToker',emailUtilisateur)
           
          this.router.navigate(['utilisateur'])
        },
        error: (error) => {
          // En cas d'échec, affiche un message d'erreur.
          this.loginError = 'Adresse email ou mots de passe incorrect';
        }
      });
    }
  }
}


