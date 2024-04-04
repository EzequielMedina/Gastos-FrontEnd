import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from 'src/app/Helpers/EmailValidator';
import { UserModel } from 'src/app/Models/UserModel';
import { AuthService } from 'src/app/Auth/auth.service';
import { Router } from '@angular/router';
import { UserProvider } from 'src/app/providers/UserProvider';
import { ResponseBaseModel } from 'src/app/Models/ResponseBaseModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder, private UserProvider: UserProvider, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, EmailValidator.validate]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    if (this.registerForm && this.registerForm.valid) {

      const user = new UserModel();
      user.nombre = this.registerForm.get('nombre')?.value;
      user.email = this.registerForm.get('email')?.value;
      user.contrasena = this.registerForm.get('contrasena')?.value;

      this.UserProvider.register(user).subscribe((res: ResponseBaseModel) => {
        if (res.ok) {
          this.authService.login(res);
          this.router.navigate(['/']);
        } else {
          alert(res.error);
        }
      });
      // Aquí puedes enviar los datos del formulario a través de un servicio, etc.
    } else {
      console.log('Formulario inválido, no se puede enviar');
    }
  }
}