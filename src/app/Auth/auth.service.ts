import { Injectable } from '@angular/core';
import { ResponseBaseModel } from '../Models/ResponseBaseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  private isLoggedIn = true; // Variable para simular si el usuario está autenticado

  login(res: ResponseBaseModel): void {
    // Aquí iría la lógica real para iniciar sesión y obtener el token
    let token = res.data.token;
    // this.isLoggedIn = true;
    sessionStorage.setItem('token', token); // Guarda el token en el almacenamiento local
    sessionStorage.setItem("email", res.data.email);
  }

  logout(): void {
    // Aquí iría la lógica real para cerrar sesión y eliminar el token
    this.isLoggedIn = false;
    sessionStorage.removeItem('token'); // Elimina el token del almacenamiento local
    sessionStorage.removeItem("email");
  }

  hasToken(): boolean {
    return this.isLoggedIn;
  }
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }
  getEmail(): string | null {
    return sessionStorage.getItem('email');
  }
}
