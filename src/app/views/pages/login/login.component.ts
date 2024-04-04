import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importa los módulos necesarios para formularios reactivos
import { UserProvider } from 'src/app/providers/UserProvider'; // Importa el proveedor de usuarios
import { AuthService } from 'src/app/Auth/auth.service'; // Importa el servicio de autenticación
import { ResponseBaseModel } from 'src/app/Models/ResponseBaseModel'; // Importa el modelo de respuesta
import { Router } from '@angular/router'; // Importa el módulo de enrutamiento
import { UserModel } from 'src/app/Models/UserModel';
import { EmailValidator } from 'src/app/Helpers/EmailValidator'; // Importa el validador de correo electrónico
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup; // Define el formulario reactivo

  constructor(private formBuilder: FormBuilder, private UserProvider: UserProvider, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, EmailValidator.validate]], // Campo de correo electrónico requerido con validación personalizada
      contrasena: ['', Validators.required] // Campo de contraseña requerido
    });
  }
  onSubmit(): void {
    // Aquí puedes manejar la lógica cuando se envía el formulario
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('contrasena')?.value;

      // Puedes enviar los datos del formulario al servidor, hacer validaciones adicionales, etc.
      const user = new UserModel();
      user.email = email;
      user.contrasena = password;
      this.UserProvider.login(user).subscribe((res: ResponseBaseModel) => {
        if (res.ok) {
          this.authService.login(res);
          this.router.navigate(['/']);
        } else {
          alert(res.error);
        }
      });
    }
  }
}
