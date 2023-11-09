import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackEndServiceService } from '../share/services/back-end-services.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {

  login: string = '';
  password: string = '';


  constructor(private BackEndServiceService: BackEndServiceService) {}

    connection(): void {
      this.BackEndServiceService.sigin(this.login, this.password)

        .subscribe(response => ({

        }));
  }

}
