import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CarItem } from '../../interfaces/carrito.interface';

@Component({
  selector: 'app-carrito-card',
  templateUrl: './carrito-card.component.html',
  styleUrls: ['./carrito-card.component.css']
})
export class CarritoCardComponent implements OnInit {

  @Input() item !: CarItem;
  @Output() onDeleteItem: EventEmitter<CarItem> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eliminar(){

    this.onDeleteItem.emit(this.item);

  }

}
