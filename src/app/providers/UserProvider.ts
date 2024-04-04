import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { UserModel } from "../Models/UserModel";
import { ResponseBaseModel } from "../Models/ResponseBaseModel";
import { Observable } from "rxjs";
@Injectable()

export class UserProvider {

    urlBase = environment.urlBase;

    constructor(private http: HttpClient) { }

    //Metodo para logeo
    login(user: UserModel): Observable<ResponseBaseModel> {

        const url = `${this.urlBase}User/login`;
        const header = { "content-type": "application/json" };
        const body = JSON.stringify(user);
        return this.http.post<ResponseBaseModel>(url, body, { headers: header });

    }

    //metodo para registro
    register(user: UserModel): Observable<ResponseBaseModel> {

        const url = `${this.urlBase}User/CreateUser`;
        const header = { "content-type": "application/json" };
        const body = JSON.stringify(user);
        return this.http.post<ResponseBaseModel>(url, body, { headers: header });

    }
}