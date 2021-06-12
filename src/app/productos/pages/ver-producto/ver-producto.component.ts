import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { VerProducto, imgsResponse } from '../../interfaces/productos.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarritoService } from '../../services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {


  constructor(private ps:ProductosService,private activateRoute:ActivatedRoute,
  private fb:FormBuilder,private cars:CarritoService,private router:Router) { }
 
  bande:boolean = false;
  product!:VerProducto;
  imgs:imgsResponse[] = [];
  cantidad:number[] = [];
  valido:boolean = false;

  total:number = 0;
  precio:number = 0;
  selecionado:number =0;
  cantitadselect:number = 0;
  canti:boolean = false;

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap((params) => this.ps.verProducto(params.producto))
    ).subscribe(resp =>{
      this.product = resp[0];
      this.precio = resp[0].precio;
      this.total = 0; //this.product.precio;

      //if(this.product.cantidad > 0){this.canti = true;}
      
      for(let i:number = 1; i <= this.product.cantidad; i++){
        this.cantidad.push(i);
      }

      this.activateRoute.params
      .pipe(
        switchMap((param) => this.ps.imgsProducto(param.producto))
      ).subscribe(imgs =>{
        this.imgs = imgs;
        this.bande = true;

      })
      
      
    })
      

  }

  sumar(){

    this.cantitadselect = this.selecionado;
    this.total = this.cantitadselect * this.product.precio;
    if(this.selecionado == 0){ this.valido = false;}

    if(this.selecionado > 0){
        this.valido = true; 

    }
   
  }

  agregar(){
    const id = this.product.idproducto;
    const cantidad = this.selecionado;
    this.cars.agregarProducto(id,cantidad).subscribe(resp =>{

      if(resp.ok){

         Swal.fire({
        
        position: 'center',
        icon: 'success',
        title: resp.msg,
        showConfirmButton: false,
        timer: 1500

      })

      }
      else{
        this.router.navigateByUrl('/auth');
      }

      

     

    })
  }




}
