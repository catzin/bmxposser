import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { marca, categoria, upload, msg } from '../interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http:HttpClient) { }

  subirProducto(data:any): Observable<upload>{
  const url = `${this.baseUrl}admin/nuevo-producto`;
  
  return this.http.post<upload>(url,data);

  }

  getMarcas():Observable<marca[]>{
    const url = `${this.baseUrl}admin/obtenerMarcas`;
    return this.http.get<marca[]>(url);

  }

  getCategorias():Observable<categoria[]>{
    const url = `${this.baseUrl}admin/obtenerCategorias`;
    return this.http.get<categoria[]>(url);

  }

  agregarMarca(marca:string):Observable<upload>{

    const url = `${this.baseUrl}admin/agregarMarca`;
    const body = {marca};
    return this.http.post<upload>(url,body);
  }

  modificarProducto(idproducto:number,cantidad:number):Observable<msg>{

    const url = `${this.baseUrl}admin/actualizar`;
    const body = {idproducto,cantidad};

    return this.http.post<msg>(url,body);

  }

}


