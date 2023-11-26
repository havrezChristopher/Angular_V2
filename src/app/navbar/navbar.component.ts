import { Component,OnInit } from '@angular/core';
import { AuthService } from '../authentification/register/Services/auth-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  isLoggedIn:boolean =this.authService.isLoggedIn()

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
    console.log("is connected navBarr");
    
    
  }
}
