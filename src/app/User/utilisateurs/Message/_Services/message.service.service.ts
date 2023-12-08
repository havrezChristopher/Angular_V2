import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMessage } from '../_Interfaces/message.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

   private API_URL = environment.API_URL;

  constructor(private http:HttpClient) { }
// Récupère tous les messages d'un groupe
getAllMessages(idGroup: number): Observable<IMessage[]> {
  return this.http.get<IMessage[]>(`${this.API_URL}/${idGroup}`);
}

// Envoie un message dans un groupe
addMessageToGroup(idExpediteur: number, idConversation: number, messageData: IMessage): Observable<IMessage> {
  return this.http.post<IMessage>(`${this.API_URL}/${idExpediteur}/${idConversation}`, messageData);
}

// Supprime un message
deleteMessage(idExpediteur: number, idMessage: number): Observable<any> {
  return this.http.delete(`${this.API_URL}/${idExpediteur}/suprimer/${idMessage}`);
}
 
// Envoyer un message
sendMessage(messageData: any): Observable<IMessage> {
  return this.http.post<IMessage>(this.API_URL, messageData);
}


// Logique pour création IMessage

// 1.crée un groupe (post) ou verifier existant
// 3.ajouter les  utilisateur un a la fois (post) 
// 4.getAll pour lister tout les message (get)

}
