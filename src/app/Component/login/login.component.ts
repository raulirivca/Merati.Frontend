import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private perfilservice:PerfilService) { }
  register=false;
  usuario: string='';
  tipoUsuario: string='';
  nombre: string='';
  dni: string='';
  cargo: string='';
  ApPat: string='';
  ApMat: string='';
  Direc: string='';
  password: string='';
  MostrarRegistrar(){
    this.register=true;
  }

  RegistrarUsuario(){
    let payload={
      usuario: this.usuario,
      tipo_Us:this.tipoUsuario,
      nombre:this.nombre,
      dni:this.dni,
      cargo:this.cargo,
      apPat:this.ApPat,
      apMat: this.ApMat,
      direc: this.Direc,
      password: this.password
    }
    this.perfilservice.registrarUsuario(payload).subscribe(
      t=>{
        if(t!=null){
        console.log('codigo',t);
        console.log(payload);
        this.perfilservice.usuario = this.usuario;
      this.perfilservice.password = this.password;
      this.router.navigate(['./principal']);
        }
        else{
          console.log('ERROR AL REGISTRAR USUARIO');
          
        }
      }
    )
    this.register=true
  }

  LoginUsuario(){

    
    this.perfilservice.autenticarUsuario(this.usuario,this.password).subscribe(t=>{
      if(t!=null){
        console.log('Logueado Correctamente');
        this.perfilservice.usuario = this.usuario;
      this.perfilservice.password = this.password;
        this.router.navigate(['./principal']);
        
      }
      else{
        console.log('Error,Corrobore los datos');
      }

    })
  }
  Cancelar(){
    this.register=false
  }
}
