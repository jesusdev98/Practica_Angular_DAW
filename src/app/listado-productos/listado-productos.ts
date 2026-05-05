// =====================================================
// listado-productos.ts
// Componente de presentación del catálogo.
// Recibe productos por @Input y comunica acciones de alta
// al carrito mediante @Output.
// =====================================================
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // Selector usado por Main para renderizar el catálogo.
  selector: 'app-listado-productos',
  standalone: false,
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.scss',
})
export class ListadoProductos {

  // Colección de productos recibida desde el componente padre.
  @Input() productos:any[] = [];

  // Evento que notifica al padre qué producto se quiere añadir al carrito.
  @Output() addToCart = new EventEmitter<any>();

  // Emite el producto seleccionado para delegar la lógica en el contenedor.
  anadir(producto:any){
    this.addToCart.emit(producto);
  }

}
