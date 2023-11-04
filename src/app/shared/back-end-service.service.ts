import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Observable,tap} from 'rxjs'
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackEndServiceService {

  constructor() { }
}
