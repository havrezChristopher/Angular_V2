// Importation des modules nécessaires d'Angular
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './register/Services/auth-service.service'; // Assurez-vous que le chemin d'accès est correct

// @Injectable permet d'injecter le guard dans d'autres classes
@Injectable({
  providedIn: 'root' // Ce service est disponible dans toute l'application
})
export class AuthGuard implements CanActivate {
  // Injecter AuthService et Router dans le constructeur
  constructor(private authService: AuthService, private router: Router) {}

  // canActivate est une méthode de l'interface CanActivate
  // Elle détermine si une route peut être activée
  canActivate(
    route: ActivatedRouteSnapshot, // Contient les informations sur la route activée
    state: RouterStateSnapshot // Contient l'état de la route à un instant donné
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Utiliser AuthService pour vérifier si l'utilisateur est connecté
    if (this.authService.isLoggedIn()) {
      // Si l'utilisateur est connecté, autoriser l'accès à la route
      return true;
    } else {
      // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
      // createUrlTree construit un UrlTree qui représente une route spécifique
      return this.router.createUrlTree(['/login']);
    }
  }
}
