import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Producto } from '../../interfaces/productos.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  productos:Producto[] = [];


  constructor(private actRoute:ActivatedRoute, private ps : ProductosService) { }

  ngOnInit(): void {

    this.actRoute.params
    .pipe(
      switchMap((params) => this.ps.listadoProducto(params.tipo))
    ).subscribe(resp =>{
      this.productos = resp;
    })
  
    

  
  }

}
