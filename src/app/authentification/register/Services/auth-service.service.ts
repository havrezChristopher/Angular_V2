// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment.development';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private API_URL = environment.API_URL;

//   constructor(private http: HttpClient, private cookieService: CookieService) {}

//   signup(userDetails: any): Observable<any> {
//     console.log(userDetails);
    
//     return this.http.post(`${this.API_URL}/authentification/register`, userDetails);
//   }

//   signin(email: string, password: string): Observable<any> {
//     return this.http.post(`${this.API_URL}/authentification/login`, { emailUtilisateur: email, motsDePasse: password });
//   }

//   // Méthode pour déconnecter l'utilisateur.
//   logout(): void {
//     // Supprimer le token du stockage des cookies.
//     this.cookieService.delete('authToken');
//     // Vous pouvez également ajouter d'autres logiques de nettoyage ici, si nécessaire.
//   }

//   // Méthode pour récupérer le token d'authentification.
//   getToken(): string | null {
//     // Récupérer et retourner le token stocké dans les cookies.
//     return this.cookieService.get('authToken');
//   }

//   // Méthode pour vérifier si l'utilisateur est connecté.
//   isLoggedIn(): boolean {
//     // Vérifier si le token d'authentification existe dans les cookies.
//     return this.cookieService.check('authToken');
//   }

//   getUserDetails(): Observable<any> {
//     return this.http.get(`${this.API_URL}/user/me`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

// @Injectable indique qu'il s'agit d'un service qui peut être injecté dans d'autres classes.
// providedIn: 'root' signifie qu'il est disponible dans toute l'application.
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL de l'API récupérée à partir des variables d'environnement.
  private API_URL = environment.API_URL;

  // Injection du service HttpClient pour les requêtes HTTP
  // et du service CookieService pour la gestion des cookies.
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  // Méthode pour inscrire un nouvel utilisateur.
  // Prend les détails de l'utilisateur et retourne un Observable.
  signup(userDetails: any): Observable<any> {
    // Affichage des détails de l'utilisateur pour le débogage.
    console.log(userDetails);
    // Envoi d'une requête POST à l'API pour l'inscription.
    return this.http.post(`${this.API_URL}/authentification/register`, userDetails);
  }

  // Méthode pour connecter un utilisateur.
  // Prend l'email et le mot de passe, retourne un Observable.
  signin(email: string, password: string): Observable<any> {
    // Envoi d'une requête POST à l'API pour la connexion.
    return this.http.post(`${this.API_URL}/authentification/login`, { emailUtilisateur: email, motsDePasse: password });
  }

  // Méthode pour déconnecter l'utilisateur.
  logout(): void {
    // Supprime le token du stockage des cookies pour déconnecter l'utilisateur.
    this.cookieService.delete('authToken');
  }

  // Méthode pour récupérer le token d'authentification stocké dans les cookies.
  getToken(): string | null {
    return this.cookieService.get('authToken');
  }

  // Méthode pour vérifier si l'utilisateur est actuellement connecté.
  isLoggedIn(): boolean {
    // Vérifie l'existence du token d'authentification dans les cookies.
    return this.cookieService.check('authToken');
  }

  // Méthode pour obtenir les détails de l'utilisateur connecté.
  getUserDetails(): Observable<any> {
    // Envoi d'une requête GET à l'API pour obtenir les informations de l'utilisateur.
    return this.http.get(`${this.API_URL}/user/me`);
  }
}
