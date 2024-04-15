export class GastosModel {
    NombreGasto: string = '';
    Fecha: Date = new Date();
    Monto: number = 0;
    Descripcion: string = '';
    TipoGastoId: string = '';
    CategoriaId: string = '';
    email: string = '';
    esTarjeta: boolean = false;
    periodoId: string = '';
    tarjetaId: string = '';
    coutaActual: number = 0;
    CoutasTotales: number = 0;
}
export interface GastoViewModel {
    gastoId: string;
    monto: number;
    fecha: Date;
    nombreGasto: string;
    descripcion: string;
    personald: string;
    categoriald: string;
    tipoGastold: string;
    tarjetaId: null;
    personaldNavigation: PersonaldNavigation;
    tipoGastoldNavigation: TipoGastoldNavigation;
}

export interface PersonaldNavigation {
    personald: string;
    nombre: string;
    email: string;
}

export interface TipoGastoldNavigation {
    tipoGastold: string;
    nombre: string;
}
