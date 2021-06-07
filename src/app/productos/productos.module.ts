import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { TipoCardComponent } from './components/tipo-card/tipo-card.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ListadoComponent } from './components/listado/listado.component';
import { RouterModule } from '@angular/router';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TipoCardComponent, CardProductComponent, ListadoComponent, VerProductoComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ProductosModule { }
