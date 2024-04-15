import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Auth/auth.service';
import { TarjetaModel } from 'src/app/Models/TarjetaModel';
import { TarjetaProvider } from 'src/app/providers/TarjetaProvider';
@Component({
  selector: 'app-create-tarjeta',
  templateUrl: './create-tarjeta.component.html',
  styleUrl: './create-tarjeta.component.scss'
})
export class CreateTarjetaComponent {
  registrarTarjetaForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private tarjetaProvider: TarjetaProvider,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registrarTarjetaForm = this.fb.group({
      nombreTarjeta: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrarTarjetaForm.valid) {
      const tarjeta = new TarjetaModel();
      tarjeta.nombre = this.registrarTarjetaForm.value.nombreTarjeta;
      tarjeta.email = this.authService.getEmail() ?? "";
      this.tarjetaProvider.SaveTarjeta(tarjeta).subscribe(
        response => {
          if (response.ok) {
            alert('Tarjeta registrada correctamente');
            this.registrarTarjetaForm.reset();
          } else {
            alert('Error al registrar la tarjeta');
          }
        }
      );
    }
  }

}
