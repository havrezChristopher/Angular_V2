import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';
import { UtilisateurInterface } from 'src/app/User/Interface/utilisateur.interface';

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
  signin(email: string, password: string): Observable<UtilisateurInterface> {
    // Envoi d'une requête POST à l'API pour la connexion.
    return this.http.post<UtilisateurInterface>(`${this.API_URL}/authentification/login`, { emailUtilisateur: email, motsDePasse: password });
  }

  // Méthode pour déconnecter l'utilisateur.
  logout(): void {
    sessionStorage.clear();
    // Supprime le token du stockage des cookies pour déconnecter l'utilisateur.
    // this.cookieService.delete('authToken');
  }

  // Méthode pour récupérer le token d'authentification stocké dans les cookies.
  getToken(): string | null {
    return this.cookieService.get('authToken');
  }

  // Méthode pour vérifier si l'utilisateur est actuellement connecté.
  isLoggedIn(): boolean {
    const email = sessionStorage.getItem('authToken')
    const password=sessionStorage.getItem('authToken')
    if(!email&&!password){
      return false
    }
    return true
    // Vérifie l'existence du token d'authentification dans les cookies.
    // return this.cookieService.check('authToken');
  }

  // Méthode pour obtenir les détails de l'utilisateur connecté.
  getUserDetails(userId:number): Observable<UtilisateurInterface> {
    return this.http.get<UtilisateurInterface>(`${this.API_URL}/utilisateur/${userId}`);
  }
}
