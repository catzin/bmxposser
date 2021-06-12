import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status!:boolean;
  Login:FormGroup = this.fb.group({

    email:['',[Validators.required,Validators.email]],
    contra:['',[Validators.required]]

  })

  constructor(private fb:FormBuilder,private authservice:AuthService,
  private router: Router){ }

  ngOnInit(): void {
  }

  ingresar(){
    
    const{email,contra} = this.Login.value; 
    this.authservice.login(email,contra).subscribe(resp => {

      if(resp.ok){
        
      
        if(resp.rol == "admin"){

          Swal.fire({

            position: 'center',
            icon: 'success',
            title: `Bienvenido ${resp.nombre}`,
            confirmButtonText: `entrar`,
            showConfirmButton: false,
            timer: 1000
        
            
        }).then(() =>{
        

            this.router.navigateByUrl('/admin');

          
        }) 
          
        }
        else{

          Swal.fire({

            position: 'center',
            icon: 'success',
            title: `Bienvenido ${resp.nombre}`,
            showConfirmButton: false,
            timer: 1500
          }).then(() =>{

            this.router.navigateByUrl('/home');

          })
          
        }
    
      }
      else{
        //error
        Swal.fire({
          
          position: 'center',
          icon: 'error',
          title: resp.msg,
          showConfirmButton: false,
          timer: 1500

        })
   
      }

      


     

      
    });
   
  }

 

}
