import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up', // Sélecteur CSS du composant, utilisé dans les templates pour intégrer le pop-up.
  templateUrl: './pop-up.component.html', // Chemin vers le template HTML du composant.
  styleUrls: ['./pop-up.component.scss'] // Chemin vers les styles SCSS du composant.
})
export class PopUpComponent {
  // Constructeur du composant, avec injection des données passées au pop-up.
  // 'dataPopUp' contiendra les données transmises au composant, telles que 'title' et 'message'.
  //! Propre a matherial!!! 
  constructor(@Inject(MAT_DIALOG_DATA) public dataPopUp: any) { }
}
