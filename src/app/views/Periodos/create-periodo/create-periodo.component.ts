import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PeriodoModel } from 'src/app/Models/PeriodoModel';
import { PeriodosProvider } from 'src/app/providers/PeriodosProvider';
@Component({
  selector: 'app-create-periodo',
  templateUrl: './create-periodo.component.html',
  styleUrl: './create-periodo.component.scss'
})
export class CreatePeriodoComponent {
  registrarPeriodoForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private PeriodosProvider: PeriodosProvider
  ) { }

  ngOnInit(): void {
    // Obtener la fecha actual
    this.iniciliarPeriodoNuevo();
  }
  private iniciliarPeriodoNuevo() {
    let fechaActual = new Date().toISOString().split('T')[0];

    // Obtener la fecha actual más un día
    let fechaMas1Dia = new Date();
    fechaMas1Dia.setDate(fechaMas1Dia.getDate() + 1);
    let fechaFin = fechaMas1Dia.toISOString().split('T')[0];

    this.registrarPeriodoForm = this.fb.group({
      nombrePeriodo: ['', Validators.required],
      fechaInicio: [fechaActual, Validators.required],
      fechaFin: [fechaFin, Validators.required]
    });
  }

  onSubmit() {
    // Aquí puedes manejar la lógica para guardar el periodo
    if (this.registrarPeriodoForm.valid) {
      // Lógica para guardar el periodo
      const Periodo = new PeriodoModel();
      Periodo.nombrePeriodo = this.registrarPeriodoForm.value.nombrePeriodo;
      Periodo.fechaInicio = this.registrarPeriodoForm.value.fechaInicio;
      Periodo.fechaFin = this.registrarPeriodoForm.value.fechaFin;

      this.PeriodosProvider.SaveGastos(Periodo).subscribe((res) => {
        if (res.ok) {
          this.registrarPeriodoForm.reset();
          this.iniciliarPeriodoNuevo();
          alert('Periodo guardado correctamente');
        } else {
          alert(res.error);
        }
      });

    }
    console.log(this.registrarPeriodoForm.value);
  }
}
