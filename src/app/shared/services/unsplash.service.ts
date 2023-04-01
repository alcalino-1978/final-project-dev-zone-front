import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UnsplashModelAPI } from 'src/app/models/unsplash.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getPhotoRandom(): Observable<UnsplashModelAPI> {
    return this.httpClient.get<UnsplashModelAPI>(environment.urlUnsplash)
  }
}
