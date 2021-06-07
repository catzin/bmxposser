import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PanelComponent } from './pages/panel/panel.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormMarcaComponent } from './components/form-marca/form-marca.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PanelComponent, FormProductComponent, FormMarcaComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
