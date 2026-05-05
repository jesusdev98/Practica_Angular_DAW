// =====================================================
// app.ts
// Componente raíz de la aplicación.
// Encaja como contenedor principal que carga el menú
// superior y el contenido dinámico según la ruta activa.
// =====================================================
import { Component, signal } from '@angular/core';

@Component({
  // Selector usado en index.html para iniciar la app.
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  // Señal con el nombre del proyecto (útil como dato base del componente).
  protected readonly title = signal('AplicacionPrueba2');
}
