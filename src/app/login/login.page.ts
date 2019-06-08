import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    User=
    {
    usuario:"andres",
    password:"123", 
  }

  constructor(public loadingCtrl:LoadingController) { }

  ngOnInit() {
  }
  async login(forma: NgForm) {
    if (forma.valid) 
    {
      const loading = await this.loadingCtrl.create({
        message: 'Validando...',
        spinner: 'dots',
      });
      loading.present();
      //this.User.usuario = forma.value.email;
      //this.User.password = forma.value.clave;
 
    console.log('ingreso a login');
    if(this.User.usuario === forma.value.user){
      console.log("verdadero");
    }
    else{
      console.log("falso");
    }
  }
}
}
