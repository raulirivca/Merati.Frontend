import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class MeratiService {
  
  private _refresh$=new Subject<void>();
  constructor(private httpclient: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  getProductoAll(): Observable<any> {
    return this.httpclient.get(`${environment.apiUrl}/Producto`);
    
  }

  
}
