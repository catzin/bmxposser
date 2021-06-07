import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/productos.interface';
import { CarritoService } from '../../services/carrito.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() producto !: Producto;

  constructor(private cars:CarritoService,private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    const id = this.producto.idproducto;

    this.cars.agregarProductoUnico(id).subscribe(resp =>{

      Swal.fire({
        
        position: 'center',
        icon: 'success',
        title: resp.msg,
        showConfirmButton: false,
        timer: 1500

      })
     
    },err =>{
      this.router.navigateByUrl('/auth')
    })
  }

}
