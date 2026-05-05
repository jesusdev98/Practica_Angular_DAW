// =====================================================
// carrito-compra.ts
// Componente de presentación del carrito.
// Recibe el contenido del carrito por @Input y emite
// solicitudes de eliminación al componente padre.
// =====================================================
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // Selector usado en Main para mostrar el carrito.
  selector: 'app-carrito-compra',
  standalone: false,
  templateUrl: './carrito-compra.html',
  styleUrl: './carrito-compra.scss',
})
export class CarritoCompra {

  // Productos actualmente añadidos al carrito.
  @Input() carrito:any[] = [];

  // Evento que avisa al padre de qué producto se quiere eliminar.
  @Output() removeFromCart = new EventEmitter<any>();

  // Emite la petición de borrado para que el contenedor gestione el estado.
  eliminar(producto:any){
    this.removeFromCart.emit(producto);
  }

}
