import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdpService } from '../../_Services/mdp.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent {
  token: string;

  constructor(
    private route: ActivatedRoute,
    private passwordService: MdpService
  ) {
    this.token = this.route.snapshot.params['token'];
  }

  resetPassword(token: string, newPassword: string) {
    this.passwordService.resetPassword(token, newPassword).subscribe(
      res => {
        console.warn('Response',token,newPassword,res)
      },
      err => {

        console.log('Erreur Reset - Password',err);
        
      }
    );
  }
}
