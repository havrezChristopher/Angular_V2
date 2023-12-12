import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AuthService } from 'src/app/authentification/register/Services/auth-service.service';
// voir pour tiper aprés
import { UtilisateurInterface } from 'src/app/User/_Interface/utilisateur.interface';
@Injectable({
  providedIn: 'root'
})
export class ParametteServicesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, authService: AuthService) { }
  // Récupérer un utilisateur par son ID
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.http}/utilisateur/${id}`);
  }

  // Mettre à jour un utilisateur
  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put<any>(`${this.http}/${id}`, userData);
  }

  // Mettre à jour le mot de passe de l'utilisateur
  updatePassword(id: string, newPassword: string): Observable<any> {
    return this.http.put(`${this.http}/utilisateur/updateMDP/${id}`, { password: newPassword });
  }

  // Mettre à jour l'image de profil de l'utilisateur
  updateProfileImage(Idutilisateur: string, contenuId: string, imageData: any): Observable<any> {
    return this.http.put(`${this.http}/${Idutilisateur}/${contenuId}/profil`, imageData);
  }

}
