// =====================================================
// admin-productos.ts
// Componente de administración del catálogo.
// Permite crear y eliminar productos mediante formulario
// reactivo y listado tabular.
// =====================================================
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiendaService } from '../tienda.service';

@Component({
  // Ruta/selector del panel de administración.
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.html',
  styleUrls: ['./admin-productos.scss'],
  standalone: false
})
export class AdminProductos {

  // Catálogo compartido que se muestra en la tabla administrativa.
  productos: any[] = [];
  // Formulario reactivo para alta de nuevos productos.
  productoForm: FormGroup;

  // Inyecta FormBuilder para construir el formulario y TiendaService para persistir cambios.
  constructor(
    private fb: FormBuilder,
    private tiendaService: TiendaService
  ) {
    // Carga inicial del catálogo desde el servicio central.
    this.productos = this.tiendaService.getProductos();

    // Estructura y validaciones del formulario de alta.
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      precio: ['', [Validators.required, Validators.min(0.01)]],
      stock: ['', [Validators.required, Validators.min(0)]]
    });
  }

  // Getter de apoyo para acceder al control de nombre desde la plantilla.
  get nombre() {
    return this.productoForm.get('nombre');
  }

  // Getter de apoyo para acceder al control de precio desde la plantilla.
  get precio() {
    return this.productoForm.get('precio');
  }

  // Getter de apoyo para acceder al control de stock desde la plantilla.
  get stock() {
    return this.productoForm.get('stock');
  }

  // Añade un producto nuevo cuando el formulario es válido.
  addProducto() {
    if (this.productoForm.invalid) {
      // Fuerza el estado touched para mostrar mensajes de error al usuario.
      this.productoForm.markAllAsTouched();
      return;
    }

    // Delega el alta al servicio para mantener un único punto de estado.
    this.tiendaService.addProducto(this.productoForm.value);
    // Reinicia el formulario para permitir una nueva inserción.
    this.productoForm.reset({
      nombre: '',
      precio: '',
      stock: ''
    });
  }

  // Elimina un producto del catálogo usando su identificador.
  deleteProducto(id: number) {
    this.tiendaService.deleteProducto(id);
  }
}
