import { JobOfferModelAPI, JobOfferModel } from './../../models/joboffer.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobofferService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // TODO todos los endpoint que NO requiere autenticación
  public getOffer(): Observable<JobOfferModelAPI[]> {
    return this.httpClient.get<JobOfferModelAPI[]>(environment.urlJobOffers)
  }

  public getLastOfferList(): Observable<JobOfferModelAPI[]> {
    return this.httpClient.get<JobOfferModelAPI[]>(environment.urlJobOffers)
    .pipe(
      map((response: JobOfferModelAPI[]) => {
        return response.sort((a: JobOfferModelAPI, b: JobOfferModelAPI) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }).slice(0, 4); //ultimas 4 ofertas creadas
      })
    )
  }

  public getOfferbyID(id: string): Observable<JobOfferModelAPI> {
    return this.httpClient.get<JobOfferModelAPI>(environment.urlJobOffers + `${id}`)
  }

  public offerRegistration(offerId: string, userId: string): Observable<JobOfferModelAPI> {
    const url = environment.urlJobOffers + `${offerId}`;
    const data = { applicants: [userId]};
    return this.httpClient.patch<JobOfferModelAPI>(url, data)
  }

  public updateUserJobOffers(userId: string, offerId: string): Observable<JobOfferModelAPI> {
    const url = environment.urlDevelopers + `${userId}`;
    const data = { jobOffers: [offerId]};
    return this.httpClient.patch<JobOfferModelAPI>(url, data)
  }
}
