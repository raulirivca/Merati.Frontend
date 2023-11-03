import { Component } from '@angular/core';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent {
  CatalogoProductos:any[]=[
    {Nombre:"Fresa Soy Frutta",Foto:"assets/Fresa.jpg",Disponible:false,Precio:3.90},
    {Nombre:"Fresa Soy Frutta",Foto:"assets/Fresa.jpg",Disponible:false,Precio:3.90},
    {Nombre:"Fresa Soy Frutta",Foto:"assets/Fresa.jpg",Disponible:false,Precio:3.90},
    {Nombre:"Fresa Soy Frutta",Foto:"assets/Fresa.jpg",Disponible:false,Precio:3.90},
    {Nombre:"Fresa Soy Frutta",Foto:"assets/Fresa.jpg",Disponible:false,Precio:3.90},
    {Nombre:"Fresa Soy Frutta",Foto:"assets/Fresa.jpg",Disponible:false,Precio:3.90},
  ]
}
