import { CompanyModelAPI } from './../../models/company.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  // GET ALL COMPANY´s
  public getAllCompanies(): Observable<CompanyModelAPI[]> {
    return this.httpClient.get<CompanyModelAPI[]>(environment.urlCompany)
  }
}
