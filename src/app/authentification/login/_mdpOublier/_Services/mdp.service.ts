import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MdpService {
  
  constructor(private _http: HttpClient) { }

  requestResetPassword(email: string) {
    return this._http.post('/api/forgot-password', { email });
  }

  resetPassword(token: string, newPassword: string) {
    return this._http.post('/api/reset-password/' + token, { newPassword });
  }
}
