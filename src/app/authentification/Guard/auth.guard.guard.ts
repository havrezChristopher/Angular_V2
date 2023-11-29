// ********************************                ADD-Commentaire                *************************************************************************
import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { AuthService } from '../register/Services/auth-service.service'; 
import { LoginComponent } from '../login/login.component';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
token!:string;
  constructor(
    private authService: AuthService,
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

