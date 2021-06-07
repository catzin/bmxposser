import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { msgAdd } from '../interfaces/productos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private baseUrl : string = environment.baseUrl;

  constructor(private http:HttpClient) { }

  agregarProductoUnico(idproducto:number): Observable<msgAdd>{

    const url = `${this.baseUrl}carrito/agregar`;
    const body = {idproducto};
    const headers = new HttpHeaders()
                    .set('token',localStorage.getItem('token') || '');

    return this.http.post<msgAdd>(url,body,{headers});

  }
}
