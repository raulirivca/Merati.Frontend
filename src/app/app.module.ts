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
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
