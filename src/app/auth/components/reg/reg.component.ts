import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  fieldTextType!: boolean;
  
  Reg:FormGroup = this.fb.group({
    nombre:['',[Validators.required]],
    app:['',[Validators.required]],
    apm:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    tel:['',[Validators.required]],
    contra:['',[Validators.required,]]


  });

  constructor(private fb:FormBuilder,private auths:AuthService){ }

  ngOnInit(): void {

  }

  mostrar(){
    this.fieldTextType = !this.fieldTextType;
  }

  registrar(){

    const {nombre,app,apm,email,tel,contra} = this.Reg.value;
    this.auths.registrar(nombre,app,apm,email,tel,contra).subscribe(resp =>{

      if(resp.ok){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: resp.msg,
            showConfirmButton: false,
            timer: 1500
        }).then(() =>{

          this.Reg.reset();
        })
      }
      else{
        Swal.fire({

          position: 'center',
          icon: 'error',
          title: resp.msg,
          showConfirmButton: false,
          timer: 1500

        })
      }
    })
  }

}
