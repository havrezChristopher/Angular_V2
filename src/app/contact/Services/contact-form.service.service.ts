import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ContactFormServiceService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }
  //TODO IMPLEMENTER DANS LE BACK-END
  sendMessage(messageData: any): Observable<any> {
    return this.http.post(`${this.API_URL}/`, messageData);
  }
}
