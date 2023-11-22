//  import { Component ,OnInit} from '@angular/core';
//  import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
//  import { AuthService } from '../register/Services/auth-service.service';
//  import { Router } from '@angular/router';
//  @Component({
//    selector: 'app-login',
//    templateUrl: './login.component.html',
//    styleUrls: ['./login.component.scss']
//  })
//  export class LoginComponent implements OnInit {
//   loginForm!: FormGroup;
//   signupError! :string;
//   loginError!:string;
//   constructor(private formBuilder: FormBuilder, private router:Router, private authService: AuthService) { }

//   ngOnInit(): void {
//     this.loginForm = this.formBuilder.group({
//       emailUtilisateur: ['', [Validators.required, Validators.email]],
//       motsDePasse: ['', Validators.required]
//     });
//   }

//   login(): void {
//     if (this.loginForm.valid) {
//       const { emailUtilisateur, motsDePasse } = this.loginForm.value;
//       this.authService.signin(this.loginForm.value.emailUtilisateur, this.loginForm.value.motsDePasse).subscribe({
//           next: (response) => {
//             this.router.navigate(['/dashboard']);
//           },
//           error: (error) => {
//             // Afficher un message d'erreur
//             this.signupError = 'Failed to sign up. Please try again.';
//           }
//       });
//     }
//   }
// }
// ********************************  ADD-Commentaire               *****************************************************
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../register/Services/auth-service.service';
import { Router } from '@angular/router';

// @Component indique que cette classe est un composant Angular.
// 'selector' définit la balise personnalisée pour utiliser ce composant.
// 'templateUrl' et 'styleUrls' lient le HTML et le SCSS de ce composant.
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Déclare une variable pour le formulaire et les messages d'erreur
  loginForm!: FormGroup;
  signupError!: string;
  loginError!: string;

  // Injecte FormBuilder pour la création de formulaires réactifs,
  // Router pour la navigation et AuthService pour la gestion de l'authentification.
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  // ngOnInit est appelé après la construction du composant.
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
          response.token ?  console.log('ok') : console.log('fail');
          this.router.navigate(['profileUtilisateur'])
        },
        error: (error) => {
          // En cas d'échec, affiche un message d'erreur.
          this.loginError = 'Nom d utilisateur ou mots de passe INCORRECT';
        }
      });
    }
  }
}


