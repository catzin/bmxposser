import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/services/auth.service';
import Swal from 'sweetalert2';
import { user } from '../../../auth/interfaces/interfaces';

@Component({
  selector: 'app-formp',
  templateUrl: './formp.component.html',
  styleUrls: ['./formp.component.css']
})
export class FormpComponent implements OnInit {

  formp:FormGroup = this.fb.group({

    calle:['',[Validators.required]],
    numi:['',[Validators.required]],
    nume:['',[Validators.required]],
    colonia:['',[Validators.required]],
    ciudad:['',[Validators.required]],
    estado:['',[Validators.required]],
    cod:['',[Validators.required]]

  });

  constructor(private fb:FormBuilder,private auths:AuthService) { }
  
  ngOnInit(): void {

  }

  registrar(){
    console.log(this.formp.value);
    const { calle,numi,nume,colonia,ciudad,estado,cod} = this.formp.value;

    //console.log(calle,numinume,colonia,ciudad,estado,cod);
    this.auths.registrarDireccion(calle,numi,nume,colonia,ciudad,estado,cod).subscribe(resp =>{


      Swal.fire({

        position: 'center',
        icon: 'success',
        title: `${resp.msg}`,
        showConfirmButton: false,
        timer: 1500
      }).then(() => location.reload());

      
    })
  

    

  }

}
