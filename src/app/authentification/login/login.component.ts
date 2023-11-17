import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BackEndServiceService } from '../Services/back-end.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: string = '';
  password: string = '';


  constructor(private BackEndServiceService: BackEndServiceService) {}

    connection(): void {
      this.BackEndServiceService.sigin(this.login, this.password)

        .subscribe(response => ({

            
        }));

  }

}
