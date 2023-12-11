import { Component } from '@angular/core';
import { ChatService } from '../_Services/chat.service';
import { io } from 'socket.io-client';
@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent {
  // private socket: any;
  // public messages: string[] = [];
  // public newMessage: string = '';
  
  // constructor(private chatService: ChatService) {
  //   this.socket = io('http://localhost:3000'); // serveur WebSocket

  //   this.socket.on('chat message', (msg :string) => {
  //     // Traitez le message reçu du serveur WebSocket
  //     this.messages.push(msg);
  //     console.log('Teste',msg);
      
  //   });
  // }

  // sendMessage(): void {
  //   if (this.newMessage) {
  //     this.socket.emit('chat message', this.newMessage); // Émettre un message au serveur WebSocket
  //     this.newMessage = ''; // Effacer le champ de texte
  //   }
  // }
}
