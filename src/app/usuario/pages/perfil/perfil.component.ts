import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { user } from '../../../auth/interfaces/interfaces';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private auths:AuthService) { }
  usuario!:user;
  bandera :boolean = false;
  ngOnInit(): void {

    this.auths.getInfoUsuario().subscribe( resp =>{
      if(resp[0]){
        this.usuario = resp[0];
        this.bandera = true;
      }

      else{
        this.bandera = false;
      }
    
    })
  }

}
