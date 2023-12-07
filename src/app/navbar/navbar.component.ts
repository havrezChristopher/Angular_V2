import { Component,OnInit } from '@angular/core';
import { AuthService } from '../authentification/register/Services/auth-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isLoggedIn = false;

    constructor(private authService: AuthService) {}
  
    ngOnInit() {
        // Souscrit à l'état de connexion pour mettre à jour isLoggedIn depuis mon status  
      this.authService.authStatus.subscribe(status => {
        this.isLoggedIn = status;
      });
    }
  
    logout() {
      this.authService.logout();
    }
}
