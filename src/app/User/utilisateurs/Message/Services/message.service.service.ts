import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageInterface } from '../Interfaces/message.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

   private API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }


  get (): Observable<MessageInterface[]> {
    return this.http.get<MessageInterface[]>(this.API_URL);
  }

  getById (id: number): Observable<MessageInterface> {
    return this.http.get<MessageInterface>(`${this.API_URL}/${id}`);
  }

  add (message: MessageInterface): Observable<void> {
    return this.http.post<void>(this.API_URL, message);
  }

  delete (id: number): Observable<void> {
    return this.http.delete<void>(this.API_URL + '/' + id);
  }

  update (id: number, messageData: MessageInterface): Observable<void> {
    return this.http.put<void>(`${this.API_URL}/${id}`, messageData);
  }

  patch (id: number, messageData: MessageInterface): Observable<void> {
    return this.http.patch<void>(`${this.API_URL}/${id}`, messageData);
  }
  

}
