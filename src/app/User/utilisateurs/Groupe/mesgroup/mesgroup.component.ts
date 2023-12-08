import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mesgroup',
  templateUrl: './mesgroup.component.html',
  styleUrls: ['./mesgroup.component.scss']
})
export class MesgroupComponent implements OnInit {
  constructor(private _ativated: ActivatedRoute) { }

  ngOnInit(): void {
    this._ativated.params.subscribe(
      (data) => {
        console.log('Groupe ==>', data);

      }
    )
  }
}