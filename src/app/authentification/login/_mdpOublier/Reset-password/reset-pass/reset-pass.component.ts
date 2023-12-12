import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emailValidator } from '../_Validator/email-reg.validator';
import { nameValidator } from '../_Validator/name.validator';
import { twoPasswordValidate } from '../_Validator/two-password.validator';
import { ActivatedRoute } from '@angular/router';
import { MdpService } from '../../_Services/mdp.service';
@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {
  // token: string;

  constructor(
    private formB: FormBuilder,
    private route: ActivatedRoute,
    private passwordService: MdpService
  ) {
    // this.token = this.route.snapshot.params['token'];
  }
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.formB.group({
      name: ['', nameValidator],
      email: ['', [emailValidator]],
      password: ['', []],
      verifyPassword: ['', []],
    }, {
      validators: [twoPasswordValidate,]
    });


  }


  // resetPassword(token: string, newPassword: string) {
  //   this.passwordService.resetPassword(token, newPassword).subscribe(
  //     res => {
  //       console.warn('Response', token, newPassword, res)
  //     },
  //     err => {

  //       console.log('Erreur Reset - Password', err);

  //     }
  //   );
  // }
}
