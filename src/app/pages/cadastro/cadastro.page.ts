import { Component, OnInit } from '@angular/core';
import { ESTADOS } from '../../estados';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  estados: any[]

  constructor() {
    this.estados = ESTADOS
   }

  ngOnInit() {
  }

}
