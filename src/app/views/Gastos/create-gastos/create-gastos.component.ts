import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { get } from 'lodash-es';
import { ResponseBaseModel } from 'src/app/Models/ResponseBaseModel';
import { CategoriaProvider } from 'src/app/providers/CategoriaProvider';
import { TiposDeGastosProvider } from 'src/app/providers/TiposDeGastosProvider';
import { CategoriaModel } from 'src/app/Models/CategoriaModel';
import { TiposDeGastosModel } from 'src/app/Models/TiposDeGastosModel';
import { AuthService } from 'src/app/Auth/auth.service'; // Importa el servicio de autenticación
import { GastosModel } from 'src/app/Models/GastosModel';
@Component({
  selector: 'app-create-gastos',
  templateUrl: './create-gastos.component.html',
  styleUrl: './create-gastos.component.scss'
})
export class CreateGastosComponent {
  registrarGastosForm!: FormGroup;
  listCategira: CategoriaModel[] = [];
  listTipoGasto: TiposDeGastosModel[] = [];
  inputDeshabilitado: boolean = true;
  constructor(private formBuilder: FormBuilder, private CategoriaProvider: CategoriaProvider, private TiposDeGastosProvaider: TiposDeGastosProvider, private authService: AuthService) { }

  ngOnInit(): void {

    let email = this.authService.getEmail();
    let fechaActual = new Date().toISOString().split('T')[0];
    this.registrarGastosForm = this.formBuilder.group({
      nombreGasto: ['', Validators.required],
      monto: ['', Validators.required],
      fecha: [fechaActual, Validators.required],
      descripcion: [''],
      usuario: [email, Validators.required],
      categoria: ['', Validators.required],
      tipoGasto: ['', Validators.required],
      tarjeta: [false]
    });

    this.getAllCategoria();
    this.getAllTipoGasto();

  }


  getAllCategoria() {
    this.CategoriaProvider.GetAllCategoria().subscribe((res: ResponseBaseModel) => {
      if (res.ok) {
        this.listCategira = get(res, 'data', []);
      } else {
        alert(res.error);
      }
    });
  }

  getAllTipoGasto() {
    this.TiposDeGastosProvaider.GetAllTiposDeGastos().subscribe((res: ResponseBaseModel) => {
      if (res.ok) {
        this.listTipoGasto = get(res, 'data', []);
      } else {
        alert(res.error);
      }
    });
  }

  onSubmit() {
    if (this.registrarGastosForm.valid) {
      // Aquí puedes realizar las acciones que desees al enviar el formulario
      console.log('Formulario válido. Enviando datos:', this.registrarGastosForm.value);
      const gasto = new GastosModel();
      gasto.NombreGasto = this.registrarGastosForm.get('nombreGasto')?.value;
      gasto.Fecha = this.registrarGastosForm.get('fecha')?.value;
      gasto.Monto = this.registrarGastosForm.get('monto')?.value;
      gasto.Descripcion = this.registrarGastosForm.get('descripcion')?.value;
      gasto.TipoGastoId = this.registrarGastosForm.get('tipoGasto')?.value;
      gasto.CategoriaId = this.registrarGastosForm.get('categoria')?.value;
      gasto.email = this.registrarGastosForm.get('usuario')?.value;
      gasto.tarjeta = this.registrarGastosForm.get('tarjeta')?.value;

      //aca me quede falta provider y back
      // Aquí puedes enviar los datos del formulario a tu backend, por ejemplo:
      // this.servicio.enviarDatos(this.registrarGastosForm.value).subscribe(response => {
      //   console.log('Respuesta del servidor:', response);
      // });
    } else {
      // Marca los campos inválidos como tocados para que se muestren los mensajes de error
      this.marcarCamposComoTocados(this.registrarGastosForm);
      console.log('Formulario inválido. Por favor, verifica los campos.');
    }
  }

  // Marca todos los controles del formulario como tocados para mostrar los mensajes de error
  private marcarCamposComoTocados(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.marcarCamposComoTocados(control);
      }
    });
  }
}


