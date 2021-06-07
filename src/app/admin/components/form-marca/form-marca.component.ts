import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../../services/admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-marca',
  templateUrl: './form-marca.component.html',
  styleUrls: ['./form-marca.component.css']
})
export class FormMarcaComponent implements OnInit {

  marcaf:FormGroup = this.fb.group({
    marcac:['',[Validators.required]]

  });

  constructor(private fb:FormBuilder, private http:HttpClient,
  private admins:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  subir(){
    
    this.admins.agregarMarca(this.marcaf.value.marcac).subscribe(resp =>{

      Swal.fire({

        position: 'center',
        icon: 'success',
        title: resp.msg,
        showConfirmButton: false,
        timer: 1500
      }).then(() =>{
         this.marcaf.reset();
         window.location.reload();
         
         })
      
    })
  }

}
