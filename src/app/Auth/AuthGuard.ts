import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../Auth/auth.service'; // Importa tu servicio de autenticación

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        if (this.authService.hasToken()) {
            return true; // Si hay un token, permite la navegación
        } else {
            this.router.navigate(['/login']); // Si no hay token, redirige al login
            return false;
        }
    }
}