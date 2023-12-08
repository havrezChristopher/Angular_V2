import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paramette',
  templateUrl: './paramette.component.html',
  styleUrls: ['./paramette.component.scss']
})
export class ParametteComponent implements OnInit {

  constructor(private _ativated: ActivatedRoute) { }


  ngOnInit(): void {
    this._ativated.params.subscribe(
      (data) => {
        console.log('Paramettre==>', data);

      }
    )
  }

}
