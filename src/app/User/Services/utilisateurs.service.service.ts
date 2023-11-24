import { Injectable } from '@angular/core';
import { UtilisateursComponent } from '../utilisateurs/utilisateurs.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursServiceService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  // Récupérer les informations de l'utilisateur actuel
  getCurrentUser(): Observable<any> {

    return this.http.get<any>(`${this.API_URL}/profil`);
  }

  getAllUsers(): Observable<any> {

    return this.http.get(`${this.API_URL}/userAll`);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.API_URL}/:${id}`);
  }

  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put(`${this.API_URL}/:${id}`, userData);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/:${id}`);
  }

  updatePassword(id: string, newPassword: string): Observable<any> {
    return this.http.put(`${this.API_URL}/updateMDP/:${id}`, { password: newPassword });
  }

  updateProfileImage(userId: string, contenuId: string, imageData: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${userId}/${contenuId}/profil`, imageData);
  }

  getAllProfilePhotos(): Observable<any> {
    return this.http.get(`${this.API_URL}/profil`);
  }
}
