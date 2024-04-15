import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { ResponseBaseModel } from "../Models/ResponseBaseModel";
import { Observable } from "rxjs";
import { GastosModel } from "../Models/GastosModel";
@Injectable()

export class GastosProvider {

    urlBase = environment.urlBase;

    constructor(private http: HttpClient) { }

    SaveGastos(gasto: GastosModel): Observable<ResponseBaseModel> {

        const url = `${this.urlBase}Gastos/SaveGasto`;
        const header = { "content-type": "application/json" };
        const body = JSON.stringify(gasto);
        return this.http.post<ResponseBaseModel>(url, body, { headers: header, withCredentials: true });

    }

}