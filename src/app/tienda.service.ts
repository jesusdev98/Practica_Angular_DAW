// =====================================================
// tienda.service.ts
// Servicio central de estado de la tienda.
// Su responsabilidad es mantener productos y carrito
// para que varios componentes compartan los mismos datos.
// =====================================================
import { Injectable } from '@angular/core';

@Injectable({
  // Se registra en raíz para disponer de una única instancia compartida.
  providedIn: 'root'
})
export class TiendaService {

  // Catálogo de productos disponible para la vista de tienda.
  productos: any[] = [
    { id: 1, nombre: 'Teclado mecánico', precio: 59.9, stock: 1 },
    { id: 2, nombre: 'Ratón óptico', precio: 19.5, stock: 2 },
    { id: 3, nombre: 'Monitor 24"', precio: 139, stock: 0 }
  ];

  // Productos añadidos por el usuario al carrito.
  carrito: any[] = [];

  // Constructor sin dependencias: el estado vive en este servicio singleton.
  constructor() { }

  // Expone el catálogo para que otros componentes lo muestren.
  getProductos() {
    return this.productos;
  }

  // Expone el carrito actual para su visualización y gestión.
  getCarrito() {
    return this.carrito;
  }

  // Añade un producto al carrito solo si todavía hay stock disponible.
  addToCart(producto: any) {
    if (producto.stock > 0) {
      this.carrito.push(producto);
      // Al añadir al carrito se descuenta una unidad del stock.
      producto.stock--;
    }
  }

  // Elimina una unidad del carrito y repone una unidad en stock.
  removeFromCart(producto: any) {
    // Busca la primera coincidencia por id para eliminar solo una unidad.
    const index = this.carrito.findIndex((item: any) => item.id === producto.id);

    if (index !== -1) {
      this.carrito.splice(index, 1);
      producto.stock++;
    }
  }

  // Crea un nuevo producto a partir de los datos del formulario de administración.
  addProducto(producto: any) {
    // Genera un id consecutivo tomando el mayor id existente.
    const nuevoId = Math.max(...this.productos.map(p => p.id), 0) + 1;

    // Convierte precio y stock a número para mantener consistencia de tipos.
    const nuevoProducto = {
      id: nuevoId,
      nombre: producto.nombre,
      precio: Number(producto.precio),
      stock: Number(producto.stock)
    };

    this.productos.push(nuevoProducto);
  }

  // Elimina un producto del catálogo y también sus apariciones en el carrito.
  deleteProducto(id: number) {
    // Localiza el producto dentro del catálogo principal.
    const indexProducto = this.productos.findIndex((producto: any) => producto.id === id);

    if (indexProducto !== -1) {
      this.productos.splice(indexProducto, 1);
    }

    // Recorre de atrás hacia delante para borrar sin alterar índices pendientes.
    for (let i = this.carrito.length - 1; i >= 0; i--) {
      if (this.carrito[i].id === id) {
        this.carrito.splice(i, 1);
      }
    }
  }
}
