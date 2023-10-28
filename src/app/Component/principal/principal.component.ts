import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  title = 'Merati.Frontend';
  valor = 1;
  bandejaProductoActivo:any;

  @Input() valorComponente = 1;
  @Input() isProducto:any;

  @Output() valorUbicar2 = new EventEmitter<number>();

  valorRecibido = 0;
  valorRecibido2 = 0;
  valorEstante = 0;
  valorEspacio = 0;

  valorTrueFalse = true;
  valorTrueFalse2 = true;

  constructor( ) {
   }

  ngOnInit(): void {
  }


  funcionUbicarFinal(e:number) {
    this.valor = e;
  }
  funcionComponente(a:any){
    if(this.valorComponente == a) return true;
    else return false;
  }

  funcionCambiar(e:any){
    this.valorTrueFalse = !e;
  }

  funcionCambiar2(e:any){
    this.valorTrueFalse2 = !e;
  }

  funcionIrUbicar(e:any){
    this.valorUbicar2.emit(e);
  }

  funcionAparecer(e:number) {
    console.log("Funcion aparecer " + e);
    this.valorRecibido = e;
  }

  funcionAparecer2(e:number) {
    console.log("Funcion aparecer2 " + e);
    this.valorRecibido2 = e;
  }

  funcionClickeador1(e:number){
    this.valorEstante = e;
  }

  funcionClickeador2(e:number){
    this.valorEspacio = e;
  }
}
