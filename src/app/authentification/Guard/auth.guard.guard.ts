
// ********************************  ADD-Commentaire               *****************************************************
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../register/Services/auth-service.service'; // Importe AuthService pour vérifier l'authentification de l'utilisateur

// La décoration @Injectable marque la classe comme une qui peut avoir des dépendances injectées.
// Ici, 'providedIn: 'root'' signifie que le service est disponible dans toute l'application.
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // Le constructeur injecte le service AuthService pour la gestion de l'authentification
  // et le service Router pour la navigation.
  constructor(private authService: AuthService, private router: Router) { }

  // La méthode canActivate est cruciale pour décider si une route doit être activée.
  // Elle renvoie un Observable, une Promesse, ou un simple booléen.
  canActivate(
    route: ActivatedRouteSnapshot, // Contient les informations de la route activée, comme les paramètres de route.
    state: RouterStateSnapshot // Contient l'état actuel du routeur, y compris l'URL.
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // Vérifie si l'utilisateur est actuellement connecté en utilisant AuthService.
    if (this.authService.isLoggedIn()) {
      // Si authentifié, l'accès à la route est autorisé.
      return true;
    } else {
      // Si non authentifié, l'utilisateur est redirigé vers la page de connexion.
      // createUrlTree construit un objet UrlTree pour définir une redirection.
      return this.router.createUrlTree(['/login']);
    }
  }
}
