import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GroupInterface } from '../_Interface/group.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GroupeServicesService {
  constructor(private http: HttpClient ) { }

  private API_URL = environment.API_URL;



  getGroupes(): Observable<GroupInterface[]> {
    return this.http.get<GroupInterface[]>(this.API_URL);
  }

  createGroupe(groupe: GroupInterface): Observable<GroupInterface> {
    return this.http.post<GroupInterface>(this.API_URL, groupe);
  }

  addMembreToGroupe(groupeId: string, membreId: string): Observable<any> {
    const url = `${this.API_URL}/${groupeId}/addMembre`;
    return this.http.post(url, { membreId });
  }

  deleteGroupe(groupeId: string): Observable<any> {
    const url = `${this.API_URL}/${groupeId}`;
    return this.http.delete(url);
  }
  
}