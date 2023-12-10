import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UtilisateurInterface } from '../Interface/utilisateur.interface';
import { AuthService } from 'src/app/authentification/register/Services/auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class UtilisateursServiceService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient,private authService:AuthService) { }
  //Deconnection 
  logout():void {
    this.authService.logout()

  }
  // Récupérer tous les utilisateurs
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/`);
  }
  
  // Récupérer toutes les photos de profil
  getAllProfilePhotos(): Observable<any> {
    return this.http.get(`${this.API_URL}/profil`);
  }
}
