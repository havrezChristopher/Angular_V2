import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageInterface } from '../Interfaces/message.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  private readonly _MessageEndPoint = 'http://localhost:3000/products'

  constructor(private http:HttpClient) { }


  get (): Observable<MessageInterface[]> {
    return this.http.get<MessageInterface[]>(this._MessageEndPoint);
  }

  getById (id: number): Observable<MessageInterface> {
    return this.http.get<MessageInterface>(this._MessageEndPoint + '/' + id);
  }

  add (message: MessageInterface): Observable<void> {
    return this.http.post<void>(this._MessageEndPoint, message);
  }

  delete (id: number): Observable<void> {
    return this.http.delete<void>(this._MessageEndPoint + '/' + id);
  }

  update (id: number, message: MessageInterface): Observable<void> {
    return this.http.put<void>(this._MessageEndPoint + '/' + id, message);
  }

  patch (id: number, message: MessageInterface): Observable<void> {
    return this.http.patch<void>(this._MessageEndPoint + '/' + id, message);
  }
  

}
