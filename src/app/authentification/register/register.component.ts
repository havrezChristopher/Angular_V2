import { Component } from '@angular/core';
import { BackEndServiceService } from '../Services/back-end.service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  login: string = '';
  password: string = '';

  constructor(private BackEndServiceService: BackEndServiceService) {}

    register(): void {
      this.BackEndServiceService.sigup(this.login, this.password)

        .subscribe(response => ({

        }));
  }
}
