import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
//voir pour remplacer le local storage 
import { CookieService } from 'ngx-cookie-service';
import { UtilisateurInterface } from 'src/app/User/_Interface/utilisateur.interface';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL de l'API récupérée à partir des variables d'environnement.
  private API_URL = environment.API_URL;
  // Le BehaviorSubject pour l'état de connexion
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  // Getter pour accéder à l'état de connexion obServable Custom en gros teste pour navBarre
  get authStatus() {
    return this.loggedIn.asObservable();
  }

  // Méthode pour vérifier si l'utilisateur est actuellement connecté.
  isLoggedIn(): boolean {
    // Mettez à jour l'état lors de la connexion/déconnexion
    this.loggedIn.next(true);
    // Vérifie si le token existe
    return !!localStorage.getItem('authToken'); // Astuce le double ! chnge la variable en boolean
  }
  // Méthode pour obtenir les détails de l'utilisateur connecté.
  // avectypage TypeScript teste
  getUserDetails(userId: number): Observable<UtilisateurInterface> {
    return this.http.get<UtilisateurInterface>(`${this.API_URL}/utilisateur/${userId}`);
  }
  // Méthode pour déconnecter l'utilisateur.
  logout(): void {
    localStorage.removeItem('authToken');//suprimer le token
    console.log('Deconection ==>', localStorage);
    // Fucking BehaviorSubject
    this.loggedIn.next(false);
    //redirection vers login
    this.router.navigate(['/login']);

  }
  // Méthode pour inscrire un nouvel utilisateur.
  // Ajouter typages
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

}
