import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from '../../_Services/message.service.service';
import { IMessage } from '../../_Interfaces/message.interface';
import { AuthService } from 'src/app/authentification/register/Services/auth-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boite-de-reception',
  templateUrl: './boite-de-reception.component.html',
  styleUrls: ['./boite-de-reception.component.scss']
})
export class BoiteDeReceptionComponent implements OnInit {

  constructor(private _messageService: MessageServiceService, private authServices: AuthService, private _activated: ActivatedRoute) { }

  ngOnInit() {
    this._activated.params.subscribe(
      (data) => {
        console.log('boite de reception==>', data);

      }
    )
  }

}
