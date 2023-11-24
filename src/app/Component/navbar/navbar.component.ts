import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() valorInicio = new EventEmitter<number>();
  apellidos:string=''
  nombres:string='';
  tipoUsuario:string='';
  constructor(private perfilservice:PerfilService) { }

  ngOnInit(): void {
    this.mostrarUsuario();
  }

  mostrarUsuario() {
    this.perfilservice.autenticarUsuario(this.perfilservice.usuario,this.perfilservice.password).subscribe(
      t=>{
        this.apellidos=t.apellidos;
        this.nombres=t.nombres;
        this.tipoUsuario=t.tipoUsuario
      }
    )
  }

}
