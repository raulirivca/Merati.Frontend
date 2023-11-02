import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Component/principal/principal.component';
import { LoginComponent } from './Component/login/login.component';
import { ProductoComponent } from './Component/producto/producto.component';
import { FormProductoComponent } from './Component/producto/form-producto/form-producto.component';


const routes: Routes = [
  {path:"principal", 
  component: PrincipalComponent
},
{path:"", 
component: LoginComponent
},
{path:"producto", 
  component: ProductoComponent
},
{
  path:"producto/formProducto",
  component:FormProductoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
