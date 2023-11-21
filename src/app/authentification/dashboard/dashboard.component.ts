
// import { Component, OnInit } from '@angular/core';
// import { AuthService  } from '../register/Services/auth-service.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit {
//   userDetails: any; // détails de l'utilisateur
//   error!:string;
  
//   constructor(private authService: AuthService, private router: Router) {}

//   ngOnInit(): void {
//     if (!this.authService.isLoggedIn()) {
//       this.router.navigate(['/login']);
//     } else {
//       this.authService.getUserDetails().subscribe(
//         (data) => {
//           this.userDetails = data;
//         },
//         (error) => {
//           // Gérez les erreurs ici
//           this.error ='erreur Route login'
//         }
//       );
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../register/Services/auth-service.service';
import { Router } from '@angular/router';

// @Component fournit les métadonnées Angular nécessaires pour associer cet
// élément TypeScript avec le fichier HTML et le fichier SCSS correspondants.
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userDetails: any; // Stocke les détails de l'utilisateur récupérés depuis l'API.
  error!: string; // Variable pour stocker les messages d'erreur.

  // Injection du service AuthService pour les fonctionnalités d'authentification
  // et du service Router pour la navigation.
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Vérification si l'utilisateur est connecté.
    if (!this.authService.isLoggedIn()) {
      // Si l'utilisateur n'est pas connecté, redirection vers la page de connexion.
      this.router.navigate(['/login']);
    } else {
      // Si l'utilisateur est connecté, récupération des détails de l'utilisateur.
      this.authService.getUserDetails().subscribe(
        (data) => {
          // Assignation des détails de l'utilisateur à la variable userDetails.
          this.userDetails = data;
        },
        (error) => {
          // Gestion des erreurs en cas de problème lors de la récupération des détails.
          this.error = 'Erreur : Impossible de récupérer les informations de l\'utilisateur';
        }
      );
    }
  }
}
