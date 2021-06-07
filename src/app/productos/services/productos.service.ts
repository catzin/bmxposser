import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { AdminService } from '../../admin/services/admin.service';
import { Observable } from 'rxjs';
import { Categoria, Producto, VerProducto, imgsResponse } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http:HttpClient){ }

  listadoCategoria():Observable<Categoria[]>{

    const url = `${this.baseUrl}productos/listadoCategoria`;
    return this.http.get<Categoria[]>(url);
  }

  listadoProducto(categoria:string):Observable<Producto[]>{

    const url = `${this.baseUrl}productos/listado/${categoria}`;
    return this.http.get<Producto[]>(url);

  }

  verProducto(nombre:string):Observable<VerProducto[]>{
    const url = `${this.baseUrl}productos/verProducto/${nombre}`;
    return this.http.get<VerProducto[]>(url);
  }

  imgsProducto(nombre:string):Observable<imgsResponse[]>{
    const url = `${this.baseUrl}productos/imgProducto/${nombre}`;
    return this.http.get<imgsResponse[]>(url);

  }

 


}
