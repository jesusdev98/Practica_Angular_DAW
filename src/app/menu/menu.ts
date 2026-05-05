// =====================================================
// menu.ts
// Componente de navegación superior.
// Permite al usuario cambiar entre la vista de tienda
// y la vista de administración mediante rutas.
// =====================================================
import { Component } from '@angular/core';

@Component({
  // Selector usado en la plantilla raíz para mostrar el menú.
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  // Componente de presentación: no requiere lógica propia por ahora.
}
