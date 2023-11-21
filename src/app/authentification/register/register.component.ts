import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './Services/auth-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  loginError!: string;
  signupError!: string;
  signupSuccess!: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      emailUtilisateur: [null, [Validators.required, Validators.email]],
      motsDePasse: [null, [Validators.required, Validators.minLength(6)]],
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


  signup(): void {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.authService.signup(this.signupForm.value).subscribe({
        next: (response) => {

          // this.signupSuccess = 'Inscription réussie !';
          this.router.navigate(['/dashboard']); // Décommentez pour rediriger
        },
        error: (error) => {
          this.signupError = 'Erreur lors de l\'inscription.';
        }
      });
    }
  }
}

// export class RegisterComponent {
//   login: string = '';
//   password: string = '';

//   constructor(private BackEndServiceService: BackEndServiceService) { }

//   register(): void {
//     this.BackEndServiceService.sigup(this.login, this.password)

//       .subscribe(response => ({

//       }));
//   }
// }
// pour envoyer un mail avec le btn submit on va utilser la valeur de ng model pour lier la valeur 
// et implémenter une fonction qui permetera de renvoyer cette valeur par mail
// appel de  l api en lui envoyant le contenu (ngModele) et lui dire env sa a l adresse mail
