import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
//voir pour remplacer le local storage 
import { CookieService } from 'ngx-cookie-service';
import { UtilisateurInterface } from 'src/app/User/Interface/utilisateur.interface';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL de l'API récupérée à partir des variables d'environnement.
  private API_URL = environment.API_URL;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }
  
// Getter pour accéder à l'état de connexion
get authStatus() {
  return this.loggedIn.asObservable();
}

// Mettez à jour l'état lors de la connexion/déconnexion
login() {
  this.loggedIn.next(true);

}
// Méthode pour déconnecter l'utilisateur.
logout(): void {
  localStorage.removeItem('authToken');//suprimer le token
  console.log('logout==>', localStorage);
  this.loggedIn.next(false);

  this.router.navigate(['/login']);//redirection vers login

}
  // Méthode pour inscrire un nouvel utilisateur.

  signup(userDetails: any): Observable<any> {

    console.log('utilisateur enregistrement ==>', userDetails);
    // Envoi d'une requête POST à l'API pour l'inscription.
    return this.http.post(`${this.API_URL}/authentification/register`, userDetails);
  }

  // Méthode pour connecter un utilisateur.

  signin(email: string, password: string): Observable<any> {
    // Envoi d'une requête POST à l'API pour la connexion.
    return this.http.post<any>(`${this.API_URL}/authentification/login`, { emailUtilisateur: email, motsDePasse: password });
  }
  // Enregistre le token d'authentification dans le localStorage
  saveAuthToken(token: string): void {
    localStorage.setItem('authToken', token);
  }


  // Méthode pour vérifier si l'utilisateur est actuellement connecté.
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken'); // Vérifie si le token existe
  }
  // Méthode pour obtenir les détails de l'utilisateur connecté.
  getUserDetails(userId: number): Observable<UtilisateurInterface> {
    return this.http.get<UtilisateurInterface>(`${this.API_URL}/utilisateur/${userId}`);
  }
}
