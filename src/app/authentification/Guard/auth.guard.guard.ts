// ********************************                ADD-Commentaire                *************************************************************************
import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { AuthService } from '../register/Services/auth-service.service'; 
@Injectable({
  providedIn: 'root'
})

export class AuthGuard {
token!:string;
  constructor(
    // AuthService pour vérifier l'état de connexion de l'utilisateur
    private authService: AuthService,
    //  Router pour pouvoir rediriger l'utilisateur si nécessaire.
    private router: Router,
    
  ) {}
  
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Autorise l'accès à la route si l'utilisateur est connecté
    } else {
      this.router.navigate(['/login']); // Redirige vers la page de connexion si non connecté
      return false; // Bloque l'accès à la route
    }
  }
}

