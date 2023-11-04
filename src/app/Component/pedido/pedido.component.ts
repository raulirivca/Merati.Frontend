import { Component } from '@angular/core';
import { Router } from '@angular/router';

const ELEMENT_DATA: any[] = [
  {IdProducto: 'PE001',FechaPedido: '25/06/2023', MontoTotal: 250},
  {IdProducto: 'PE002',FechaPedido: '25/06/2023', MontoTotal: 250},
  {IdProducto: 'PE003',FechaPedido: '25/06/2023', MontoTotal: 250 },
  {IdProducto: 'PE004',FechaPedido: '25/06/2023', MontoTotal: 250 },
  {IdProducto: 'PE005',FechaPedido: '25/06/2023', MontoTotal: 250 }
];
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent {
  nuevopedido:boolean=false;
  displayedColumns: string[] = ['IdPedido', 'FechaPedido','MontoTotal'];
  dataSource = [...ELEMENT_DATA];
  CatalogoProductos:any[]=[
    {Nombre:"Fresa Soy Frutta",Foto:"assets/Fresa.jpg",Disponible:false,Precio:3.90},
    {Nombre:"Chicha Morada Soy Frutta",Foto:"assets/Chicha.jpg",Disponible:true,Precio:2.30},
    {Nombre:"Maracuya Soy Frutta",Foto:"assets/Maracuya.jpg",Disponible:true,Precio:4.50},
    {Nombre:"Linaza Wayus",Foto:"assets/Linaza.jpg",Disponible:false,Precio:10.90},
    {Nombre:"Durazno Wayus",Foto:"assets/Durazno.jpg",Disponible:true,Precio:9.90},
    {Nombre:"Manzana Wayus",Foto:"assets/Manzana.jpg",Disponible:false,Precio:8.70},
  ]
 
  constructor(){}
  addPedido() {
    this.nuevopedido=true
  }
}
