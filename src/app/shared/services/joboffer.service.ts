import { JobOfferModelAPI } from './../../models/joboffer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobofferService {

  public API_URL: string = 'http://localhost:3000/v1/joboffers/';
  constructor(
    private httpClient: HttpClient
  ) { }

  // TODO todos los endpoint que NO requiere autenticación
  public getOffer(): Observable<JobOfferModelAPI[]> {
    return this.httpClient.get<JobOfferModelAPI[]>(this.API_URL)
  }

  public getOfferbyID(id: string): Observable<JobOfferModelAPI> {
    return this.httpClient.get<JobOfferModelAPI>(this.API_URL + `/${id}`)
  }

  public offerRegistration(offerId: string, userId: string): Observable<JobOfferModelAPI> {
    const url = this.API_URL + `${offerId}`;
    const data = { applicants: [userId]};
    return this.httpClient.patch<JobOfferModelAPI>(url, data)
  }

  public updateUserJobOffers(userId: string, offerId: string): Observable<JobOfferModelAPI> {
    const url = 'http://localhost:3000/v1/developers/' + `${userId}`;
    const data = { jobOffers: [offerId]};
    return this.httpClient.patch<JobOfferModelAPI>(url, data)
  }
}
