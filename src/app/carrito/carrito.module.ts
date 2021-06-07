import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoRoutingModule } from './carrito-routing.module';
import { CarPageComponent } from './components/car-page/car-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CarPageComponent],
  imports: [
    CommonModule,
    CarritoRoutingModule,
    RouterModule
  ]
})
export class CarritoModule { }
