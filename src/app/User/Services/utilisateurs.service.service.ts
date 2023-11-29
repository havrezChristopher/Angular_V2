import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UtilisateurInterface } from '../Interface/utilisateur.interface';
@Injectable({
  providedIn: 'root'
})
export class UtilisateursServiceService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  // Récupérer les informations de l'utilisateur actuel
  getCurrentUser(): Observable<UtilisateurInterface> {
    return this.http.get<UtilisateurInterface>(`${this.API_URL}/profil`);
  }

  // Récupérer tous les utilisateurs
  getAllUsers(): Observable<UtilisateurInterface[]> {
    return this.http.get<UtilisateurInterface[]>(`${this.API_URL}/`);
  }

  // Récupérer un utilisateur par son ID
  getUserById(id: number): Observable<UtilisateurInterface> {
    return this.http.get<UtilisateurInterface>(`${this.API_URL}/utilisateur/${id}`);
  }

  // Mettre à jour un utilisateur
  updateUser(id: string, userData: UtilisateurInterface): Observable<UtilisateurInterface> {
    return this.http.put<UtilisateurInterface>(`${this.API_URL}/${id}`, userData);
  }

  // Supprimer un utilisateur
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  // Mettre à jour le mot de passe de l'utilisateur
  updatePassword(id: string, newPassword: string): Observable<any> {
    return this.http.put(`${this.API_URL}/utilisateur/updateMDP/${id}`, { password: newPassword });
  }

  // Mettre à jour l'image de profil de l'utilisateur
  updateProfileImage(Idutilisateur: string, contenuId: string, imageData: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${Idutilisateur}/${contenuId}/profil`, imageData);
  }
  
  // Récupérer toutes les photos de profil
  getAllProfilePhotos(): Observable<any> {
    return this.http.get(`${this.API_URL}/profil`);
  }
}
