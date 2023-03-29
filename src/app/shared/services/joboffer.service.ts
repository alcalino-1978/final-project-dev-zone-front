import { JobOfferModelAPI } from './../../models/joboffer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobofferService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // TODO todos los endpoint que NO requiere autenticación
  getOffer(): Observable<JobOfferModelAPI[]> {
    return this.httpClient.get<JobOfferModelAPI[]>('http://localhost:3000/v1/joboffers/')
  }
  // getCatId(id:number): Observable<JobOfferModelAPI> {
  //   return this.httpClient.get<JobOfferModelAPI>(environment.url + 'breeds/' + id)
  // }
  // getCatRandom(): Observable<CatModelUnsplashAPI> {
  //   return this.httpClient.get<CatModelUnsplashAPI>(environment.urlUnsplash)
  // }
  // postUserLogin(urlUserLogin:urlUserLogin): Observable<UserModelAPI> {
  //   return this.httpClient.post<UserModelAPI>(environment.urlUserLogin, urlUserLogin)
  // }

}
