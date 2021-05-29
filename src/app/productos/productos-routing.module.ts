import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoCardComponent } from './components/tipo-card/tipo-card.component';
import { ListadoComponent } from './components/listado/listado.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
