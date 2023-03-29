import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModelAPI } from 'src/app/models/user.model';
//import { CompanyModelAPI } from 'src/app/models/company.model';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // TODO todos los endpoint que REQUIEREN autenticación

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(
      environment.urlUsers + 'login',
      {
        email,
        password,
      },
      httpOptions
    );
  }

  logoutService(): Observable<UserModelAPI> {
    return this.http.post<UserModelAPI>(environment.urlUsers + 'logout', { }, httpOptions);
  }

  deleteUserService(email: string): Observable<any> {
    // todo`https://dominio/${entity/:id`}
    const url = environment.urlUsers;
    return this.http.delete(url);
  }

  // todo Tres tipos de registros según Entidad
  registerCompany(name: string, cif: string,logo: string, description: string,  email: string, password: string, listOffers:string[], numberEmployees: string): Observable<any> {
    //this.http.post('http://localhost:8001/upload.php', formData)
    return this.http.post<any>(
      environment.urlCompany,
      {
        name,
        cif,
        logo,
        description,
        email,
        password,
        listOffers,
        numberEmployees,
      },
      httpOptions
    );
  }
  /*register(name: string, lastName: string, email: string, password: string, phoneNumber: string): Observable<any> {
    return this.http.post<any>(
      environment.urlUsers + 'register/',
      {
        name,
        lastName,
        email,
        password,
        phoneNumber,
      },
      httpOptions
    );
  }*/

}
