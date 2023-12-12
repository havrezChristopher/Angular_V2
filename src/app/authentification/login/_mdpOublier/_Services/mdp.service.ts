import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MdpService {
   
  private API_URL = environment.API_URL;
  
  constructor(private _http: HttpClient) { }

  requestResetPassword(email: string) {
    return this._http.post(`${this.API_URL}/forgot-password` ,{email});
  }

  resetPassword(token: string, newPassword: string) {
    return this._http.post(`${this.API_URL}/reset-password${token}`, { newPassword });
  }
}
