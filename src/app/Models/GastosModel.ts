export class GastosModel {
    NombreGasto: string = '';
    Fecha: Date = new Date();
    Monto: number = 0;
    Descripcion: string = '';
    TipoGastoId: string = '';
    CategoriaId: string = '';
    email: string = '';
    tarjeta: boolean = false;
}