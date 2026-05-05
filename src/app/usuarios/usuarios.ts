// =====================================================
// usuarios.ts
// Componente de la sección de usuarios.
// En este apartado se gestiona el ciclo de vida:
// - ngOnInit(): carga automática de datos
// - ngOnDestroy(): cancelación de la suscripción
// - Manejo de errores (RA3_e)
// =====================================================

import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuariosServicio } from '../usuarios-servicio';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  standalone: false,
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.scss']
})
export class Usuarios implements OnInit, OnDestroy {

  // Array donde se almacenan los usuarios
  usuarios: any[] = [];

  // Variable para guardar la suscripción
  suscripcionUsuarios!: Subscription;

  // 🔴 NUEVO: mensaje de error para mostrar en pantalla
  errorMensaje: string = '';

  constructor(private usuariosServicio: UsuariosServicio) {}

  // =====================================================
  // Se ejecuta al entrar en el componente
  // Carga automática con manejo de errores
  // =====================================================
  ngOnInit() {
    this.suscripcionUsuarios = this.usuariosServicio.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.errorMensaje = '';
      },
      error: (err) => {
        this.errorMensaje = err.message;
      }
    });
  }

  // =====================================================
  // Se ejecuta al salir del componente
  // Cancela la suscripción para evitar fugas de memoria
  // =====================================================
  ngOnDestroy() {
    if (this.suscripcionUsuarios) {
      this.suscripcionUsuarios.unsubscribe();
    }
  }

  // =====================================================
  // Método manual (botón)
  // También con manejo de errores
  // =====================================================
  cargarUsuarios() {
    this.suscripcionUsuarios = this.usuariosServicio.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.errorMensaje = '';
      },
      error: (err) => {
        this.errorMensaje = err.message;
      }
    });
  }

}