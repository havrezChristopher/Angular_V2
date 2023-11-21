// import { Component } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { BackEndServiceService } from '../register/Services/back-end.service.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   login: string = '';
//   password: string = '';


//   constructor(private BackEndServiceService: BackEndServiceService) {}

//     connection(): void {
//       this.BackEndServiceService.sigin(this.login, this.password)

//         .subscribe(response => ({

            
//         }));

//   }

// // }
// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { BackEndServiceService } from '../register/Services/back-end.service.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(
//     private formBuilder: FormBuilder,
//     private backEndService: BackEndServiceService,
//     private router: Router
//   ) {
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', Validators.required]
//     });
//   }

//   connection(): void {
//     if (this.loginForm.valid) {
//       const { email, password } = this.loginForm.value;
//       this.backEndService.sigin(email, password).subscribe(response => {
//         // Stockez le token de l'utilisateur et d'autres données nécessaires
//         localStorage.setItem('token', response.token);
//         // Redirigez l'utilisateur vers la page d'accueil ou le tableau de bord
//         this.router.navigate(['/user-home']);
//       }, error => {
//         // Gérez les erreurs ici, par exemple en affichant un message à l'utilisateur
//         console.error(error);
//       });
//     } else {
//       // Le formulaire n'est pas valide, gérez l'affichage des erreurs
//     }
//   }
// }
 import { Component ,OnInit} from '@angular/core';
 import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 import { AuthService } from '../register/Services/auth-service.service';
 import { Router } from '@angular/router';
 @Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
 })
 export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  signupError! :string;
  loginError!:string;
  constructor(private formBuilder: FormBuilder, private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailUtilisateur: ['', [Validators.required, Validators.email]],
      motsDePasse: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { emailUtilisateur, motsDePasse } = this.loginForm.value;
      this.authService.signin(this.loginForm.value.emailUtilisateur, this.loginForm.value.motsDePasse).subscribe({
          next: (response) => {
            this.router.navigate(['/dashboard']);
          },
          error: (error) => {
            // Afficher un message d'erreur
            this.signupError = 'Failed to sign up. Please try again.';
          }
      });
    }
  }
}


