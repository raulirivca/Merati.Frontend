import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Component/principal/principal.component';
import { LoginComponent } from './Component/login/login.component';


const routes: Routes = [
  {path:"principal", 
  component: PrincipalComponent
},
{path:"login", 
component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
