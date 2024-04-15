import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormControl, UntypedFormGroup, Validators, FormBuilder } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { UserProvider } from 'src/app/providers/UserProvider';
import get from 'lodash-es/get';
import { UserModel } from 'src/app/Models/UserModel';
import { PeriodoModel } from 'src/app/Models/PeriodoModel';
import { PeriodosProvider } from 'src/app/providers/PeriodosProvider';
import { ResponseBaseModel } from 'src/app/Models/ResponseBaseModel';
import { GastoViewModel } from 'src/app/Models/GastosModel';
import { IngresoModel } from 'src/app/Models/IngresoModel';
import { AuthService } from 'src/app/Auth/auth.service';
import { IngresoProvider } from 'src/app/providers/IngresoProvider';
import { formatDate } from '@angular/common';
interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  registrarIngresoForm!: FormGroup;
  porcentaje: number = 0;

  constructor(private chartsData: DashboardChartsData,
    private userProvider: UserProvider,
    private periodoProvider: PeriodosProvider,
    private ingresoProvider: IngresoProvider,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
  }
  public ingresoModel: IngresoModel = new IngresoModel();
  periodoSeleccionado: string = ''; // Variable para almacenar el periodo seleccionado
  listGastos: GastoViewModel[] = []; // Variable para almacenar la lista de gastos
  public usersGrupo: UserModel[] = [];
  public listPeriodo: PeriodoModel[] = [];
  public gastoTotalEzequiel: number = 0;
  public gastoTotalBrenda: number = 0;
  public gastoTotal: number = 0;
  public user: UserModel = new UserModel();
  public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      name: 'Avram Tarasios',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Br',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      name: 'Quintin Ed',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'In',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      name: 'Friderik Dávid',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.inicializarform();
    this.initCharts();
    this.cargarDatosIniciales();
    // await this.cargarPeriodos();
    // await this.cargarIngreso();
    // this.periodoSeleccionado = this.listPeriodo[0].periodold;
    // await this.cargarGrupo();
    // this.user = this.usersGrupo.find(user => user.email == this.authService.getEmail()) ?? new UserModel();
    // this.calcularProgres()
  }
  async cargarDatosIniciales(): Promise<void> {
    await Promise.all([
      this.cargarPeriodos(),
      this.cargarIngreso(),
    ]);
  }


  calcularProgres() {
    const ingreso = this.ingresoModel.monto;
    const gasto = this.user.nombre === 'Ezequiel Medina' ? this.gastoTotalEzequiel : this.gastoTotalBrenda;
    this.porcentaje = ingreso > 0 ? Math.min((gasto / ingreso) * 100, 100) : 0;
    console.log(this.porcentaje);
  }
  guardarIngreso() {
    this.ingresoModel = this.registrarIngresoForm.value;
    this.ingresoModel.email = this.authService.getEmail() ?? '';
    console.log(this.ingresoModel);

    this.ingresoProvider.SaveIngreso(this.ingresoModel).subscribe((res: ResponseBaseModel) => {
      if (res.ok) {
        alert('Ingreso registrado correctamente');
      } else {
        alert(res.error);
      }
    });
  }
  inicializarform() {
    let fechaActual = new Date().toISOString().split('T')[0];

    this.registrarIngresoForm = this.formBuilder.group({
      monto: ['', Validators.required],
      fecha: [fechaActual, Validators.required],
      descripcion: [''],
    });
  }
  async cargarPeriodos(): Promise<void> {
    const response: ResponseBaseModel = await this.periodoProvider.GetAllPeriodosSinVencer().toPromise() || new ResponseBaseModel();
    this.listPeriodo = response.data || [];
    this.periodoSeleccionado = this.listPeriodo.length > 0 ? this.listPeriodo[0].periodold : '';
    this.cargarGrupo(this.periodoSeleccionado)

  }

  async cargarIngreso(): Promise<void> {
    const email = this.authService.getEmail() ?? '';
    const response: ResponseBaseModel = await this.ingresoProvider.GetByIngresoPersonaId(email).toPromise() || new ResponseBaseModel();
    this.ingresoModel = response.data || {};
    this.registrarIngresoForm.patchValue({
      monto: this.ingresoModel.monto,
      fecha: formatDate(this.ingresoModel.fecha, 'yyyy-MM-dd', 'en-US'),
      descripcion: this.ingresoModel.descripcion
    });
  }
  private cargarIngresos(res: ResponseBaseModel) {
    this.ingresoModel = res.data || {};
    const fechaFormateada = formatDate(this.ingresoModel.fecha, 'yyyy-MM-dd', 'en-US');
    this.registrarIngresoForm.patchValue({
      monto: this.ingresoModel.monto,
      fecha: fechaFormateada,
      descripcion: this.ingresoModel.descripcion
    });
  }

  cambioDePeriodo() {
    this.cargarGrupo(this.periodoSeleccionado);

  }

  async cargarGrupo(periodoId: string = this.periodoSeleccionado): Promise<void> {
    this.listGastos = [];
    const response: ResponseBaseModel = await this.userProvider.getByPersonGrupo(periodoId).toPromise() || new ResponseBaseModel();
    this.usersGrupo = response.data || [];
    this.user = this.usersGrupo.find(user => user.email === this.authService.getEmail()) ?? new UserModel();
    this.resolverCargarGrupo(response);
  }

  private resolverCargarGrupo(res: ResponseBaseModel) {
    this.usersGrupo = get(res, 'data', []);
    console.log('Usuarios del grupo:', this.usersGrupo);
    this.usersGrupo.forEach(usuario => {
      this.listGastos.push(...usuario.listGasto);

    });
    this.gastoTotalEzequiel = 0;
    this.gastoTotalBrenda = 0;
    this.gastoTotal = 0;
    this.listGastos.forEach(gasto => {
      this.gastoTotal += gasto.monto;
      if (gasto.tipoGastoldNavigation.nombre == 'Ezequiel') {
        this.gastoTotalEzequiel += gasto.monto;
      } else if (gasto.tipoGastoldNavigation.nombre == 'Brenda') {
        this.gastoTotalBrenda += gasto.monto;
      } else if (gasto.tipoGastoldNavigation.nombre == 'Compartido') {
        this.gastoTotalEzequiel += gasto.monto / 2;
        this.gastoTotalBrenda += gasto.monto / 2;
      }
    });
    this.calcularProgres();
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }



}
