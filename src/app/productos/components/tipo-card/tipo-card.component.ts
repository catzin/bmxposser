import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../admin/services/admin.service';
import { ProductosService } from '../../services/productos.service';
import { Categoria } from '../../interfaces/productos.interface';

@Component({
  selector: 'app-tipo-card',
  templateUrl: './tipo-card.component.html',
  styleUrls: ['./tipo-card.component.css']
})
export class TipoCardComponent implements OnInit {

  constructor(private ps:ProductosService) { }

  categorias:Categoria[] = [];

  ngOnInit(): void {

    this.ps.listadoCategoria().subscribe(resp =>{
      this.categorias = resp;
    })

  }

}
