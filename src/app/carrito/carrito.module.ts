import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoRoutingModule } from './carrito-routing.module';
import { RouterModule } from '@angular/router';
import { CarrioViewComponent } from './pages/carrio-view/carrio-view.component';
import { CarritoCardComponent } from './components/carrito-card/carrito-card.component';
import { CarritoListComponent } from './components/carrito-list/carrito-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ CarrioViewComponent, CarritoCardComponent, CarritoListComponent ],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class CarritoModule { }
