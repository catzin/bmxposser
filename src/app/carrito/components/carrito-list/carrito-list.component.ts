import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../productos/services/carrito.service';
import { CarItem } from '../../interfaces/carrito.interface';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.css']
})
export class CarritoListComponent implements OnInit {

  listado : CarItem[] = [];
  bandera : boolean = false;
  total:number = 0;
  constructor(private cars:CarritoService) { }

  ngOnInit(): void {

    
    this.cars.listadoCarrito().subscribe(resp =>{
      this.listado = resp;
      if(this.listado.length > 0){
        this.bandera = true;
        this.listado.forEach(i => {this.total = this.total + (i.precio*i.cantidad); });
    
      }

      else{
        this.bandera = false;
      }
    })
   
  }

  ordenar(){
    Swal.fire({
        title: '¿Estás seguro?',
        text: `El total de la orden es : $${this.total}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, ordenar ya!'
    }).then((result) => {

        if (result.isConfirmed) {

          this.cars.ordenar(this.total).subscribe(resp =>{

            if(resp.ok){

              Swal.fire(
              'Ordenado!',
              `${resp.msg}`,
              'success'
              ).then(()=>{

                this.cars.listadoCarrito().subscribe(resp =>{
                  this.listado = resp;
                  if(this.listado.length > 0){

                    this.bandera = true;
                    this.listado.forEach(i => {this.total = this.total + i.precio ; });
         
                  }

                  else{
                    this.bandera = false;
                  }

      })

              })

            }

            else{

              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text:`${resp.msg}`,
                footer: '<a href="/perfil">click aqui para editar </a>'
              })

            
            }
          })
          
        }
})

  


    /*this.cars.ordenar(this.total).subscribe(resp =>{


      
      console.log('resp');
    })*/

    
  }

  
  eliminarItem(item:CarItem){
    this.cars.eliminarItem(item.idproducto).subscribe((_) =>{

      this.total = 0;

      this.cars.listadoCarrito().subscribe(resp =>{

        this.listado = resp;

        if(this.listado.length > 0){

          this.bandera = true;
          this.listado.forEach(i => {this.total = this.total + i.precio ; });
         
      }

      else{
 
          this.bandera = false;
      }

      })
      

    })
    
  }

}
