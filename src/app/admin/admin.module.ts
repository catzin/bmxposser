import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PanelComponent } from './pages/panel/panel.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { FormMarcaComponent } from './components/form-marca/form-marca.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [PanelComponent, FormProductComponent, FormMarcaComponent, TableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
