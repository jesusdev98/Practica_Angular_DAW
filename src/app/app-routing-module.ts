// ======================================================
// app-routing-module.ts
// Configuración de rutas de la aplicación.
// Conecta las vistas principales (tienda, admin y usuarios)
// y define redirecciones por defecto y fallback.
// ======================================================

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Main } from './main/main';
import { AdminProductos } from './admin-productos/admin-productos';
import { Usuarios } from './usuarios/usuarios';

// Tabla de rutas principal usada por el router de Angular.
const routes: Routes = [

  // Ruta inicial: redirige automáticamente a la tienda.
  { path: '', redirectTo: '/tienda', pathMatch: 'full' },

  // Vista de compra: listado de productos + carrito.
  { path: 'tienda', component: Main },

  // Vista de administración de productos.
  { path: 'admin', component: AdminProductos },

  // Vista de usuarios (consume API REST).
  { path: 'users', component: Usuarios },

  // Cualquier URL no contemplada vuelve a la tienda.
  { path: '**', redirectTo: '/tienda' }

];

@NgModule({
  // Registra las rutas a nivel raíz de la aplicación.
  imports: [RouterModule.forRoot(routes)],

  // Exporta RouterModule para usar routerLink en componentes.
  exports: [RouterModule]
})
export class AppRoutingModule { }