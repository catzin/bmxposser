import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  productos = [1,2,3,4,56,7,8,8];

  constructor() { }

  ngOnInit(): void {
  }

}
