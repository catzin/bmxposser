import { Component, OnInit } from '@angular/core';
import { Producto, Categoria } from '../../../productos/interfaces/productos.interface';
import { ProductosService } from '../../../productos/services/productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categoria } from '../../interfaces/admin.interface';
import { AdminService } from '../../services/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  form:FormGroup = this.fb.group({

    sel:['',[Validators.required]]

  })

  formChange:FormGroup = this.fb.group({

    id:['',[Validators.required]],
    cantidad:['',[Validators.required]]

  })

  productos:Producto[] = [];
  categorias:string[] = [];
  bandera:boolean = false;
  seleccionado!:string;
  constructor(private ps:ProductosService,private fb:FormBuilder,private admins:AdminService){}
  ngOnInit(): void {

    this.ps.listadoCategoria().subscribe(resp =>{
      for(let i:number = 0; i < resp.length; i++ ){this.categorias[i] = resp[i].categoria; }
    })

    this.form.get('sel')?.valueChanges.subscribe(data => {
      this.seleccionado = data;
      this.obtenerProductos(this.seleccionado);
    })


  }

  obtenerProductos(categoria:string){
    this.ps.listadoProducto(categoria).subscribe(resp =>{
      this.productos = resp;
      this.bandera = true;
    })

  }

  actualizar(){
    const {id,cantidad} = this.formChange.value;
    this.admins.modificarProducto(id,cantidad).subscribe(resp =>{

      if(resp.ok){


        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: resp.msg,
          showConfirmButton: false,
          timer: 1500
      }).then(() =>{
        this.formChange.reset();
        this.obtenerProductos(this.seleccionado);
      })

      }

      else{

        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: resp.msg,
          showConfirmButton: false,
          timer: 1500
      })

      }

    })
    
  }

}
