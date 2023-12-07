import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentification/register/Services/auth-service.service';
import { UtilisateurInterface } from '../Interface/utilisateur.interface';
import { UtilisateursServiceService } from '../Services/utilisateurs.service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})

export class UtilisateursComponent implements OnInit {
  utilisateurFound!: boolean;
  utilisateurError!: string;
  utilisateurActuel!: UtilisateurInterface;
  userId!: number;
  successMessage = '';
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private _nomActivatedRoute: ActivatedRoute,
    private utilisateur: UtilisateursServiceService) { }

  ngOnInit() {
    // L'ID de l'utilisateur à récupérer
    const userId = localStorage.getItem('userId'); // Récupère l'ID utilisateur
    this._nomActivatedRoute.params.subscribe(params => {
      //! ajout pour passer les parrametre par l id  
      this.userId = +params['id'];
    });
    this.authService.getUserDetails(this.userId).subscribe({
      next: (data) => {
        console.log('Donnée utilisateur ', this.utilisateurActuel);

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
        };
        console.log(this.utilisateurActuel);
      },
      error: (error) => {

        this.utilisateurError = 'Erreur lors de la récupération de l’utilisateur', error;
      },
      complete: () => {
        console.log("Récupération de l'utilisateur terminée");
        this.userId = this._nomActivatedRoute.snapshot.params['id'];
        this.utilisateurFound = !this.utilisateurFound;
      }
    });

  }

  logout(): void {
    this.authService.logout();
  }
 
}

