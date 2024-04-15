import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { ResponseBaseModel } from "../Models/ResponseBaseModel";
import { Observable } from "rxjs";
import { TarjetaModel } from "../Models/TarjetaModel";
@Injectable()

export class TarjetaProvider {
    GetAllTarjetaByEmail(email: string | ""): Observable<ResponseBaseModel> {
        const url = `${this.urlBase}Tarjeta/GetAllTarjetaByEmail`;
        const header = { "content-type": "application/json" };
        const body = JSON.stringify(email);
        return this.http.post<ResponseBaseModel>(url, body, { headers: header, withCredentials: true });
    }

    urlBase = environment.urlBase;

    constructor(private http: HttpClient) { }

    SaveTarjeta(periodo: TarjetaModel): Observable<ResponseBaseModel> {

        const url = `${this.urlBase}Tarjeta/SaveTarjeta`;
        const header = { "content-type": "application/json" };
        const body = JSON.stringify(periodo);
        return this.http.post<ResponseBaseModel>(url, body, { headers: header, withCredentials: true });

    }

}