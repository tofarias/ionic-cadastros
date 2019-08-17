import { Component, OnInit } from '@angular/core';
import { ESTADOS } from '../../estados';
import { ToastController } from '@ionic/angular';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  estados: any[]
  formCadastro: FormGroup

  constructor(private toastCtrl: ToastController, private fb: FormBuilder) {
    this.estados = ESTADOS
    this.montaForm()
   }

  ngOnInit() {
  }

  montaForm()
  {
    this.formCadastro = this.fb.group(
      {
        nome: ['',Validators.required],
        email: ['', Validators.compose(
          [
            Validators.required,
            Validators.pattern(emailRegex)
          ]
        )],
        uf: ['', Validators.required],
        senha: ['', Validators.required],
        senha2: ['']
      },
      {
        validator: this.matchPasswordValidation
      }
    )
  }

  matchPasswordValidation( ac: AbstractControl ){
    let password = ac.get('senha').value
    let passwordConfirm = ac.get('senha2').value
    
    if( password != passwordConfirm ){
      ac.get('senha2').setErrors(
        { MatchPassword: true }
      )
    }else{
      return null
    }
  }

  enviar()
  {
    this.toastCtrl.create({
      message: 'cadastro enviado com sucesso',
      duration: 3000,
      color: 'success'
    }).then(msg => {
      console.log('Form enviado')
      msg.present()
    })
  }

}
