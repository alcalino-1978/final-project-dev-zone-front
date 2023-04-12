import { JobOfferModelAPI } from './../../models/joboffer.model';
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

  login(email: string, password: string, type: string): Observable<any> {
    const urlLogin = `${environment.urlUsers}login/${type}/${email}`;
    return this.http.post<any>(
      urlLogin,
      {
        password,
      },
      httpOptions
    );
  }

  logoutService(): Observable<UserModelAPI> {
    return this.http.post<UserModelAPI>(environment.urlUsers + 'logout', { }, httpOptions);
  }

  deleteUserService(id: string, entityType: string): Observable<any> {
    let url: string;
    const body = { id };

    if (entityType === 'Developer') {
      url = `${environment.urlDevelopers}${id}`;
    } else if (entityType === 'Company') {
      url = `${environment.urlCompany}${id}`;
    } else {
      throw new Error(`Invalid entityType ${entityType}`);
    }

    return this.http.delete(url, { body });
  }

  // todo Tres tipos de registros según Entidad
  registerCompany(formData:any): Observable<any> {
    const httpOptionsCustom = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      }),
    }
    //this.http.post('http://localhost:8001/upload.php', formData)
    return this.http.post<any>(
      environment.urlCompany,
      formData,
      httpOptionsCustom
    );
  }

  registerDeveloper(formData:any): Observable<any> {
    // console.log(formData);
    const httpOptionsCustom = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      }),
    }
    //this.http.post('http://localhost:8001/upload.php', formData)
    return this.http.post<any>(
      environment.urlDevelopers,
      formData,
      httpOptionsCustom
    );
  }
  updateEntity(formData:any, entityType: string, id: string): Observable<any> {
    let url: string;
    if (entityType === 'Developer') {
      url = `${environment.urlDevelopers}${id}`;
    } else if (entityType === 'Company') {
      url = `${environment.urlCompany}${id}`;
    } else {
      throw new Error(`Invalid entityType ${entityType}`);
    }
    // console.log(formData);
    const httpOptionsCustom = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
      }),
    }
    return this.http.put<any>(
      url,
      formData,
      httpOptionsCustom
    );
  }

  deleteOfferService(id: string): Observable<JobOfferModelAPI> {
    const url = environment.urlJobOffers + id;
    return this.http.delete<JobOfferModelAPI>(url)
  }

  public getDevelopers(): any {
    const url = environment.urlDevelopers;
    return this.http.get<any>(url);
  }
}
