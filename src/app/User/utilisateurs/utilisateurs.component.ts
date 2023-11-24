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
  message!:string
  submitted = false;
  utilisateurService!:string;

  users: any[] = [];
  selectedUser: any;

  constructor(
    private fb: FormBuilder,
    private userService:UtilisateursServiceService
  ) { }
 

 
  

  getAllUsers() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    }, error => {
      this.message = 'Erreur lors de la récupération des utilisateurs';
    });
  }

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
      console.log('Form Data:', this.profileForm.value);
  
      // Ici, vous pouvez appeler un service pour mettre à jour les informations de l'utilisateur
      // Par exemple: this.userService.updateUser(this.profileForm.value).subscribe(...);
  
      // reset du formulaire
      this.profileForm.reset();
      this.message = 'Profil mis à jour avec succès.';
    } else {
      // message Erreur
      this.message = 'Veuillez remplir tous les champs requis.';
    }
  }
  
}
