import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrioViewComponent } from './pages/carrio-view/carrio-view.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:CarrioViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
