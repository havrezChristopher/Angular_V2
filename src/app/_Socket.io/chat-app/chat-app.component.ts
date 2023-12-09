import { Component } from '@angular/core';
import { ChatService } from '../_Services/chat.service';
@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.scss']
})
export class ChatAppComponent {
  message!: string;
  messages: string[] = [];

  constructor(private chatService: ChatService) {
    this.chatService.getMessages().subscribe((msg: string) => {
      this.messages.push(msg);
    });
  }

  sendMessage(): void {
    if (this.message.trim()) {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}
