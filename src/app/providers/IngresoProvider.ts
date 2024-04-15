import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { ResponseBaseModel } from "../Models/ResponseBaseModel";
import { Observable } from "rxjs";
import { IngresoModel } from "../Models/IngresoModel";
@Injectable()

export class IngresoProvider {

    urlBase = environment.urlBase;

    constructor(private http: HttpClient) { }

    SaveIngreso(ingreso: IngresoModel): Observable<ResponseBaseModel> {

        const url = `${this.urlBase}Ingreso/SaveIngreso`;
        const header = { "content-type": "application/json" };
        const body = JSON.stringify(ingreso);
        return this.http.post<ResponseBaseModel>(url, body, { headers: header, withCredentials: true });

    }
    GetByIngresoPersonaId(email: string): Observable<ResponseBaseModel> {
        const url = `${this.urlBase}Ingreso/GetByIngresoPersonaId`;
        const header = { "content-type": "application/json" };
        const body = JSON.stringify(email);
        return this.http.post<ResponseBaseModel>(url, body, { headers: header, withCredentials: true });
    }

}