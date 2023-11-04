import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  register=false;
  RegistrarUsuario(){
    this.register=true
  }
  Cancelar(){
    this.register=false
  }
}
