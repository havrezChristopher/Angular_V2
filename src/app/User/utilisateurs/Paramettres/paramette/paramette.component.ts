import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/authentification/register/Services/auth-service.service';

@Component({
  selector: 'app-paramette',
  templateUrl: './paramette.component.html',
  styleUrls: ['./paramette.component.scss']
})
export class ParametteComponent implements OnInit {

  constructor(private _ativated: ActivatedRoute,private authService:AuthService) { }


  ngOnInit(): void {
    this._ativated.params.subscribe(
      (data) => {
        console.log('Paramettre==>', data);
        
      }
    )
  }
  logout(): void {
    this.authService.logout();
  }
}
