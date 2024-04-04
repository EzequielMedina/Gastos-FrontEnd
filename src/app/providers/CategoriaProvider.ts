import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { ResponseBaseModel } from "../Models/ResponseBaseModel";
import { Observable } from "rxjs";
@Injectable()

export class CategoriaProvider {

    urlBase = environment.urlBase;

    constructor(private http: HttpClient) { }

    GetAllCategoria(): Observable<ResponseBaseModel> {

        const url = `${this.urlBase}Categoria/GetAllCategoria`;
        const header = { "content-type": "application/json" };
        return this.http.get<ResponseBaseModel>(url, { headers: header });

    }

}