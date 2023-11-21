import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  signup(userDetails: any): Observable<any> {
    console.log(userDetails);
    
    return this.http.post(`${this.API_URL}/authentification/register`, userDetails);
  }

  signin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/authentification/login`, { emailUtilisateur: email, motsDePasse: password });
  }

  // Méthode pour déconnecter l'utilisateur.
  logout(): void {
    // Supprimer le token du stockage des cookies.
    this.cookieService.delete('authToken');
    // Vous pouvez également ajouter d'autres logiques de nettoyage ici, si nécessaire.
  }

  // Méthode pour récupérer le token d'authentification.
  getToken(): string | null {
    // Récupérer et retourner le token stocké dans les cookies.
    return this.cookieService.get('authToken');
  }

  // Méthode pour vérifier si l'utilisateur est connecté.
  isLoggedIn(): boolean {
    // Vérifier si le token d'authentification existe dans les cookies.
    return this.cookieService.check('authToken');
  }

  getUserDetails(): Observable<any> {
    return this.http.get(`${this.API_URL}/user/me`);
  }
}
