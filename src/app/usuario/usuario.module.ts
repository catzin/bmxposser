import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { FormpComponent } from './components/formp/formp.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PerfilComponent, FormpComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
