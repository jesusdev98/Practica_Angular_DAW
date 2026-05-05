// =====================================================
// app-module.ts
// Módulo principal (NgModule) de la aplicación.
// Declara componentes, importa dependencias de Angular
// y configura servicios globales (como HttpClient).
// =====================================================

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// Routing principal de la aplicación
import { AppRoutingModule } from './app-routing-module';

// Componentes principales
import { App } from './app';
import { Menu } from './menu/menu';
import { Main } from './main/main';
import { AdminProductos } from './admin-productos/admin-productos';
import { ListadoProductos } from './listado-productos/listado-productos';
import { CarritoCompra } from './carrito-compra/carrito-compra';
import { Usuarios } from './usuarios/usuarios';

// Proveedores modernos de Angular
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  // Componentes propios que pertenecen a este módulo.
  declarations: [
    App,
    Menu,
    Main,
    AdminProductos,
    ListadoProductos,
    CarritoCompra,
    Usuarios
  ],

  // Módulos externos necesarios para la aplicación.
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

  // Servicios globales (inyección de dependencias).
  providers: [
    provideBrowserGlobalErrorListeners(),

    // Configuración moderna de HttpClient (Angular 18+)
    // Permite hacer peticiones HTTP sin usar HttpClientModule
    provideHttpClient()
  ],

  // Componente raíz que Angular carga al iniciar la app.
  bootstrap: [App]
})
export class AppModule { }