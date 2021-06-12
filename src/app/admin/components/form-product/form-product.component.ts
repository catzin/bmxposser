import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { marca, categoria } from '../../interfaces/admin.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  formP:FormGroup = this.fb.group({

    nombre:['',[Validators.required]],
    pdes:['',[Validators.required]],
    cantidad:['',[Validators.required]],
    precio:['',[Validators.required]],
    cate:['',[Validators.required]],
    marca:['',[Validators.required]],
    arch:['',[Validators.required]]
  })

  multipleimgs:any [] = [];
  images:any;
  marcas:marca[] = [];
  categorias:categoria[] = [];

  constructor(private fb:FormBuilder,private admins : AdminService) { }

  ngOnInit(): void {

    this.admins.getCategorias().subscribe(resp =>{this.categorias = resp;})
    this.admins.getMarcas().subscribe(resp =>{ this.marcas = resp; });
    
  }


  selectMultipleIMG(event:any){
    if(event.target.files.length > 0){
      this.multipleimgs = event.target.files;
    }

  }

  onMultipleSubmit(){

 
    const formData = new FormData();

    formData.append('nombre',this.formP.value.nombre);
    formData.append('descripcion',this.formP.value.pdes);
    formData.append('precio',this.formP.value.precio);
    formData.append('categoria',this.formP.value.cate);
    formData.append('cantidad',this.formP.value.cantidad);
    formData.append('marca',this.formP.value.marca);


     for(let img of this.multipleimgs){
       formData.append('images',img);
     }

     this.admins.subirProducto(formData).subscribe(resp => {
       if(resp.ok){


         Swal.fire({

          position: 'center',
          icon: 'success',
          title: `${resp.msg}`,
          showConfirmButton: false,
          timer: 1500
        }).then(() => this.formP.reset());
         
       }
     })


  }

}
