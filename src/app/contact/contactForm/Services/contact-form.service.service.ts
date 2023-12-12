import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ContactFormServiceService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }


}
