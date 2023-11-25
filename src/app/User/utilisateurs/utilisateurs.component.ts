import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilisateursServiceService } from '../Services/utilisateurs.service.service';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})

export class UtilisateursComponent {
  profileForm!: FormGroup;
  message!: string
  submitted = false;

  users: any[] = [];
  selectedUser: any;

  constructor(
    private fb: FormBuilder,
    private userService: UtilisateursServiceService
  ) { }

  getUser(id: string) {
    this.userService.getUserById(id).subscribe(data => {
      this.selectedUser = data;
    }, error => {
      this.message = 'Erreur lors de la récupération de l\'utilisateur';
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    // Vérifier si le formulaire est valide
    if (this.profileForm.valid) {

      this.message = 'Profil mis à jour avec succès.';
    } else {
      // message Erreur
      this.message = 'Veuillez remplir tous les champs requis.';
    }
  }

}
