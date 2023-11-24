import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  usuario: string='';
  password: string='';

  constructor(private httpclient: HttpClient) { }

  autenticarUsuario(usuario:string,password:string): Observable<any> {
    const params = new HttpParams()
      .set('usuario', usuario)
      .set('password', password);
    return this.httpclient.get(`${environment.apiUrl}/Perfil/AutenticarUsuario`,{ params });
    
  }
  registrarUsuario(payload:any): Observable<any>{
  return this.httpclient.post(`${environment.apiUrl}/Perfil/CrearUsuario`,payload);
  }
}
