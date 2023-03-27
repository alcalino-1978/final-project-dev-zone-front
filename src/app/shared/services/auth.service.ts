import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModelAPI } from 'src/app/models/user.model';

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
  register(name: string, lastName: string, email: string, password: string, phoneNumber: string): Observable<any> {
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
  }

}
