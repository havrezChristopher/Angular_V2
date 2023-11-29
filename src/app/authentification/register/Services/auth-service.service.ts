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

  constructor(private http: HttpClient) { }

  // Méthode pour inscrire un nouvel utilisateur.

  signup(userDetails: any): Observable<any> {

    console.log(userDetails);
    // Envoi d'une requête POST à l'API pour l'inscription.
    return this.http.post(`${this.API_URL}/authentification/register`, userDetails);
  }

  // Méthode pour connecter un utilisateur.

  //TODO ajouter une interface pour l observable 
  signin(email: string, password: string): Observable<any> {
    // Envoi d'une requête POST à l'API pour la connexion.
    return this.http.post<any>(`${this.API_URL}/authentification/login`, { emailUtilisateur: email, motsDePasse: password });
  }
// Enregistre le token d'authentification dans le localStorage
saveAuthToken(token: string): void {
  localStorage.setItem('authToken', token);
}
  // Méthode pour déconnecter l'utilisateur.

  logout(): void {
    sessionStorage.removeItem('sessionToken');

  }

  // Méthode pour vérifier si l'utilisateur est actuellement connecté.

  isLoggedIn(): boolean {
    const email = localStorage.getItem('authToken');

    if (!email) {
      console.log(email);
      
      return false;
    }
    return true;

  }

  // Méthode pour obtenir les détails de l'utilisateur connecté.
  getUserDetails(userId: number): Observable<UtilisateurInterface> {
    return this.http.get<UtilisateurInterface>(`${this.API_URL}/utilisateur/${userId}`);
  }
}
