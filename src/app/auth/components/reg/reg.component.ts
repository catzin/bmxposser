import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    contra:['',[Validators.required,]]


  });

  constructor(private fb:FormBuilder){ }

  ngOnInit(): void {



  }


  mostrar(){

    this.fieldTextType = !this.fieldTextType;
    
  }

  registrar(){
    
  }

}
