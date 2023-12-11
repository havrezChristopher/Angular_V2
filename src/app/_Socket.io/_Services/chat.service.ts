import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000/api/'; // URL de socket
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  // Envoyer un message
  public sendMessage(message: string) {
    this.socket.emit('chat message', message);
  }

  // Recevoir des messages
  public getMessages(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('chat message', (data) => {
        observer.next(data);
        console.log('teste ', data);
        
      });
    });
  }
}
