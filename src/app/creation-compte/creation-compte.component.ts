import { Component } from '@angular/core'
import { BackEndServiceService } from '../share/services/back-end-services.service';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.scss']
})
export class CreationCompteComponent {
  login: string = '';
  password: string = '';

  constructor(private BackEndServiceService: BackEndServiceService) {}

    register(): void {
      this.BackEndServiceService.sigup(this.login, this.password)

        .subscribe(response => ({

        }));
  }
}
