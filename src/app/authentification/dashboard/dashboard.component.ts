
import { Component, OnInit } from '@angular/core';
import { AuthService  } from '../register/Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userDetails: any; // Contiendra les détails de l'utilisateur

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.authService.getUserDetails().subscribe(
        (data) => {
          this.userDetails = data;
        },
        (error) => {
          // Gérez les erreurs ici
        }
      );
    }
  }
}
