import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { ResponseBaseModel } from "../Models/ResponseBaseModel";
import { Observable } from "rxjs";
import { PeriodoModel } from "../Models/PeriodoModel";
@Injectable()

export class PeriodosProvider {

    urlBase = environment.urlBase;

    constructor(private http: HttpClient) { }

    SaveGastos(periodo: PeriodoModel): Observable<ResponseBaseModel> {

        const url = `${this.urlBase}Periodo/SavePeriodo`;
        const header = { "content-type": "application/json" };
        const body = JSON.stringify(periodo);
        return this.http.post<ResponseBaseModel>(url, body, { headers: header, withCredentials: true });

    }

    GetAllPeriodosSinVencer(): Observable<ResponseBaseModel> {

        const url = `${this.urlBase}Periodo/GetByPeriodoSinVencer`;
        const header = { "content-type": "application/json" };
        return this.http.get<ResponseBaseModel>(url, { headers: header });

    }

}