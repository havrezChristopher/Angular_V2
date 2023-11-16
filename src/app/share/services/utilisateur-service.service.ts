import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {

//Renplacer par les variable d env ==>
private apiUrl = 'http://localhost:3000/api';

constructor(private http: HttpClient) {}

getAllUsers(): Observable<any> {
  return this.http.get(this.apiUrl);
}

getUserById(id: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/${id}`);
}

deleteUser(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

updateUser(id: number, data: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, data);
}
}

