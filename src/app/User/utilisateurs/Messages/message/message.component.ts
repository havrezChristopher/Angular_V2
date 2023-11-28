import { Component } from '@angular/core';
import { MessageInterface } from '../Interface/message.interface';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {


  messages = []; // Remplacer par le mécanisme approprié pour récupérer les messages
  newMessage = '';
  selectedFile: File | null = null;

  constructor(/* Injection de dépendances */) {}

  sendMessage() {
    const messageData = {
      text: this.newMessage,
      image: this.selectedFile,
    };
    // Logique pour envoyer le message au backend
    this.newMessage = '';
    this.selectedFile = null;
  }

  onFileSelected(event: Event) {
    // Logique pour gérer la sélection du fichier
  }

  getUrlFromSelectedFile() {
    // Logique pour obtenir l'URL du fichier sélectionné
  }
}


