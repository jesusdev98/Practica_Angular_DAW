// =====================================================
// usuarios-servicio.ts
// Servicio encargado de comunicarse con la API REST.
// En este apartado se implementa el manejo de errores
// mediante catchError.
// =====================================================

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServicio {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  // =====================================================
  // Método GET con manejo de errores
  // =====================================================
  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // =====================================================
  // Método privado para gestionar errores
  // =====================================================
  private handleError(error: any) {
    let mensaje = 'Error al obtener los usuarios';

    // Se puede personalizar el mensaje si se quiere
    if (error.status === 0) {
      mensaje = 'No hay conexión con el servidor';
    }

    return throwError(() => new Error(mensaje));
  }

}