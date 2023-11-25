
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../register/Services/auth-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Déclare une variable pour la lier au formulaire FormGroup
  loginForm!: FormGroup;
  loginError!: string;
  idUser!:number
  

  // Injecte FormBuilder pour la création de formulaires réactifs,
  // Router pour la navigation et AuthService pour la gestion de l'authentification.
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService,private _nomActivatedRoute : ActivatedRoute) { }


  ngOnInit(): void {
    this.idUser = this._nomActivatedRoute.snapshot.params['id']

    this.loginForm = this.formBuilder.group({
      emailUtilisateur: ['', [Validators.required, Validators.email]],
      motsDePasse: ['', Validators.required]
    });
  }


  // Fonction pour gérer le processus de connexion.
  login(): void {

    if (this.loginForm.valid && this.idUser) {
      // Destructure les valeurs du formulaire pour faciliter l'accès.
      const { emailUtilisateur, motsDePasse } = this.loginForm.value;
      // Appelle la méthode signin d'AuthService et souscrit à la réponse.
      this.authService.signin(emailUtilisateur, motsDePasse).subscribe({
        next: (response) => {
          console.log(response);
          // stockage du token dans le session storage avec la valeur de l email
          sessionStorage.setItem('authToker',emailUtilisateur)
           
          this.router.navigate(['utilisateur/'+ this.idUser])
        },
        error: (error) => {

          this.loginError = 'Adresse email ou mots de passe incorrect';
          console.warn(this.loginError)
          // modifier l erreur pour voir le champs qui correspond soit mail ou mdp
        }
      });
    }
  }
}


