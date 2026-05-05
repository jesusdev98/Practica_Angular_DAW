// =====================================================
// main.ts
// Componente contenedor de la zona de tienda.
// Coordina listado y carrito usando el estado compartido
// del servicio TiendaService.
// =====================================================
import { Component } from '@angular/core';
import { TiendaService } from '../tienda.service';

@Component({
  // Selector de uso interno en las rutas de tienda.
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
  standalone: false
})
export class Main {

  // Catálogo mostrado en el componente de listado.
  productos: any[] = [];
  // Estado del carrito mostrado en el componente de carrito.
  carrito: any[] = [];

  // Inyecta TiendaService para compartir datos entre componentes hermanos.
  constructor(private tiendaService: TiendaService) {
    // Obtiene las colecciones iniciales desde el servicio central.
    this.productos = this.tiendaService.getProductos();
    this.carrito = this.tiendaService.getCarrito();
  }

  // Responde al evento de añadir enviado por ListadoProductos.
  onAddToCart(producto: any) {
    this.tiendaService.addToCart(producto);
  }

  // Responde al evento de eliminar enviado por CarritoCompra.
  onRemoveFromCart(producto: any) {
    this.tiendaService.removeFromCart(producto);
  }
}
