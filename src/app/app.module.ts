import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Component/menu/menu.component';
import { PrincipalComponent } from './Component/principal/principal.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { LoginComponent } from './Component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './Component/producto/producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormProductoComponent } from './Component/producto/form-producto/form-producto.component';
import { PedidoComponent } from './Component/pedido/pedido.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from "@angular/material/select";


const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta por defecto
  { path: 'principal', component: PrincipalComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    NavbarComponent,
    LoginComponent,
    ProductoComponent,
    FormProductoComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule, 
    MatTableModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    MatGridListModule,
    MatSelectModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
