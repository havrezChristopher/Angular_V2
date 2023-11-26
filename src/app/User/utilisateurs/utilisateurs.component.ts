import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentification/register/Services/auth-service.service';
import { UtilisateurInterface } from '../Interface/utilisateur.interface';
import { UtilisateursServiceService } from '../Services/utilisateurs.service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})

export class UtilisateursComponent implements OnInit {
  utilisateurFound!: boolean;
  utilisateurError!: string;
  utilisateurActuel!: UtilisateurInterface;
  userId!:number;
  constructor(private _utilsServices: AuthService,private _nomActivatedRoute:ActivatedRoute) { }



  ngOnInit() {
    // L'ID de l'utilisateur à récupérer
   
    this._utilsServices.getUserDetails(this.userId).subscribe({
      next: (data) => {
        console.log(this.utilisateurActuel);

        this.utilisateurActuel = {


          idUtilisateur: data.idUtilisateur,
          nom: data.nom,
          prenom: data.prenom,
          emailUtilisateur: data.emailUtilisateur,
          motsDePasse: data.motsDePasse,
          dateDeNaissance: data.dateDeNaissance,
          role: data.role,
          genre: data.genre,
          idPhotoProfil: data.idPhotoProfil,
          derniereConnexion: data.derniereConnexion,
          facebook: data.facebook,
          snapchat: data.snapchat,
          instagram: data.instagram,
          tictoc: data.tictoc,
          twitter: data.twitter,
          telephone: data.telephone,
          gsm: data.gsm
        }
        console.log(this.utilisateurActuel)
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des détails de l’utilisateur', error);
        this.utilisateurError = 'Erreur lors de la récupération de l’utilisateur';
      },
      complete: () => {
        console.log("Récupération de l'utilisateur terminée")
        this.userId = this._nomActivatedRoute.snapshot.params['id']
        this.utilisateurFound= !this.utilisateurFound
      }

    })
  }



}