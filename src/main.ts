// =====================================================
// main.ts
// Punto de entrada de la aplicación Angular.
// Su responsabilidad es arrancar AppModule en el navegador
// para poner en marcha toda la aplicación.
// =====================================================
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';

// Inicia Angular y carga el módulo raíz de la aplicación.
platformBrowser().bootstrapModule(AppModule, {
  
})
  .catch(err => console.error(err));
