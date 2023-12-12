import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupeServicesService } from '../_Service/group.services.service';
import { GroupInterface } from '../_Interface/group.interface';

@Component({
  selector: 'app-mesgroup',
  templateUrl: './mesgroup.component.html',
  styleUrls: ['./mesgroup.component.scss']
})
export class MesgroupComponent implements OnInit {
  groupes: GroupInterface[] = []; // Utilise GroupInterface pour le type
  membres: any[] = [];
  idGroupe: string = '';
  
  constructor(
    private _ativated: ActivatedRoute, 
    private groupeService: GroupeServicesService,
    // private groupe:GroupInterface
    ) { }

  ngOnInit(): void {
    this._ativated.params.subscribe(
      (data) => {
        console.log('Groupe ==>', data);
        this.getGroupes(); // Charge les groupes dès que le composant est prêt

      }
    )
  }
 

  getGroupes(): void {
    this.groupeService.getGroupes().subscribe(
      groupes => this.groupes = groupes,
      error => console.error("Oops, problème en vue : ", error)
    );
  }

  // Ajoute un nouveau groupe

    createGroupe(nouveauNom: string): void {
      let nouveauGroupe: GroupInterface = {
        id: '', // Généré côté serveur normalement
        nom: nouveauNom,
        membres: [] // Liste initiale de membres vide
      };
  
      this.groupeService.createGroupe(nouveauGroupe).subscribe(
        groupe => this.groupes.push(groupe),
        error => console.error("Aïe, ça n'a pas marché : ", error)
      );
  }

  // Ajouter un membre à un groupe
  ajouterMembre(groupeId: string, membreId: string): void {
    this.groupeService.addMembreToGroupe(groupeId, membreId).subscribe(
      () => console.log(`Membre ${membreId} ajouté au groupe ${groupeId}`),
      error => console.error("Oups, petit souci : ", error)
    );
  }

  // Supprimer un groupe
  supprimerGroupe(groupeId: string): void {
    this.groupeService.deleteGroupe(groupeId).subscribe(
      () => this.groupes = this.groupes.filter(g => g.id !== groupeId),
      // petite dédicasse du point filter lol 
      error => {
        return console.error("Oh non, erreur : ", error);
      }
    );
  }
}
