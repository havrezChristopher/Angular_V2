export interface IMessage {
    idMessage: number;
    idExpediteur: number;
    idGroupe: number; // ou idConversation si c'est spécifique à une conversation
    contenu: string;
    dateEnvoi: Date;
    // 1.crée un groupe
    // 2.add utilisateur
    // 3.envoyer message a utilisateur un a la fois 
    // 4.getAll pour lister tout les message 

    // Ajouter date des message etc 
}
