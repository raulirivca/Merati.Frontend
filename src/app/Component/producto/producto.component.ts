import { Component } from '@angular/core';

import { Product } from './producto.interface';
import { Router} from '@angular/router';

const ELEMENT_DATA: Product[] = [
  {IdProducto: 'P001', NombreProducto: 'Fresa Soy Frutta', TipoProducto: 'Refresco', Precio_Unitario: 3.90,Cantidad:50 },
  {IdProducto: 'P002', NombreProducto: 'Chicha Morada Soy Frutta', TipoProducto: 'Refresco', Precio_Unitario: 2.30,Cantidad:65 },
  {IdProducto: 'P003', NombreProducto: 'Maracuya Soy Frutta', TipoProducto: 'Refresco', Precio_Unitario: 4.50,Cantidad:30 },
  {IdProducto: 'P004', NombreProducto: 'Linaza Wayus', TipoProducto: 'Concentrado de Fruta', Precio_Unitario: 10.90,Cantidad:25 },
  {IdProducto: 'P005', NombreProducto: 'Durazno Wayus', TipoProducto: 'Concentrado de Fruta', Precio_Unitario: 9.90,Cantidad:15 }
];
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})

export class ProductoComponent {
  displayedColumns: string[] = ['IdProducto', 'NombreProducto', 'TipoProducto', 'PrecioUnitario','Cantidad'];
  dataSource = [...ELEMENT_DATA];
  
  constructor(private router:Router){}

  addData() {
    this.router.navigate(['producto/formProducto'])
  }

  
}
