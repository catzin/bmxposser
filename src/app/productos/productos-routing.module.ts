import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoCardComponent } from './components/tipo-card/tipo-card.component';
import { ListadoComponent } from './components/listado/listado.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:TipoCardComponent
      },
      {
        path:'listado/:tipo',
        component:ListadoComponent
      },
      {
        path:'listado/ver/:producto',
        component:VerProductoComponent
      }
      
    ] 

  },

 

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
