import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/auth/interfaces/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AuthResponse } from '../../../auth/interfaces/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  band :boolean = false;

  constructor(public authservice:AuthService) { }

  ngOnInit(): void {

    this.authservice.validarToken().subscribe(resp =>{
      if(resp.ok){
        
        this.band = true;
      }
    })

  
    
    
  }


  salir(){
    this.authservice.cerrarSesion();
  }


}
