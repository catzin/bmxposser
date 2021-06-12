import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { msgAdd } from '../interfaces/productos.interface';
import { Observable } from 'rxjs';
import { CarItem } from '../../carrito/interfaces/carrito.interface';

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


  agregarProducto(idproducto:number,cantidad:number):Observable<msgAdd>{
    const url = `${this.baseUrl}carrito/agregarProducto`;
     const body = {idproducto,cantidad};
    const headers = new HttpHeaders()
                    .set('token',localStorage.getItem('token') || '');

    return this.http.post<msgAdd>(url,body,{headers});

  }


  listadoCarrito():Observable<CarItem[]>{

    const url = `${this.baseUrl}carrito/listado`;
    const headers = new HttpHeaders()
                    .set('token',localStorage.getItem('token') || '');
    
    return this.http.get<CarItem[]>(url,{headers});
  }


  ordenar(total:number):Observable<msgAdd>{
    const url = `${this.baseUrl}carrito/ordenar`;

    const body = {total};
    const headers = new HttpHeaders()
                    .set('token',localStorage.getItem('token') || '');
    return this.http.post<msgAdd>(url,body,{headers});

  }


  eliminarItem(idproducto:number):Observable<msgAdd>{
    const url = `${this.baseUrl}carrito/eliminarItem`;
    const body = {idproducto};
    const headers = new HttpHeaders()
                    .set('token',localStorage.getItem('token') || '');

    return this.http.post<msgAdd>(url,body,{headers});
  }
}
