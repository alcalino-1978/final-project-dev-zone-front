import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatModelAPI, CatModelUnsplashAPI } from '../../models/cat.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCats(): Observable<CatModelAPI[]> {
    return this.httpClient.get<CatModelAPI[]>(environment.url + 'breeds')
  }
  getCatId(id:number): Observable<CatModelAPI> {
    return this.httpClient.get<CatModelAPI>(environment.url + 'breeds/' + id)
  }
  getCatRandom(): Observable<CatModelUnsplashAPI> {
    return this.httpClient.get<CatModelUnsplashAPI>(environment.urlUnsplash)
  }
  // postUserLogin(urlUserLogin:urlUserLogin): Observable<UserModelAPI> {
  //   return this.httpClient.post<UserModelAPI>(environment.urlUserLogin, urlUserLogin)
  // }

}
