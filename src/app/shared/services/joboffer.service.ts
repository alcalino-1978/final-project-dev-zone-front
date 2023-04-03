import { CompanyModelAPI } from './../../models/company.models';
import { JobOfferModelAPI, JobOfferModelPost } from './../../models/joboffer.model';
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

  // GET ALL JOB OFFERS
  public getOffer(): Observable<JobOfferModelAPI[]> {
    return this.httpClient.get<JobOfferModelAPI[]>(environment.urlJobOffers)
  }

  // GET SORTED JOB OFFERS
  public getLastOfferList(): Observable<JobOfferModelAPI[]> {
    return this.httpClient.get<JobOfferModelAPI[]>(environment.urlJobOffers)
    .pipe(
      map((response: JobOfferModelAPI[]) => {
        return response.sort((a: JobOfferModelAPI, b: JobOfferModelAPI) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }).slice(0, 3); //ultimas 4 ofertas creadas
      })
    )
  }

  // GET SORTED JOB OFFERS
  public getLastOfferList(): Observable<JobOfferModelAPI[]> {
    return this.httpClient.get<JobOfferModelAPI[]>(environment.urlJobOffers)
    .pipe(
      map((response: JobOfferModelAPI[]) => {
        return response.sort((a: JobOfferModelAPI, b: JobOfferModelAPI) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }).slice(0, 3); //ultimas 4 ofertas creadas
      })
    )
  }
  // GET JOB OFFER BY ID
  public getOfferbyID(id: string): Observable<JobOfferModelAPI> {
    return this.httpClient.get<JobOfferModelAPI>(environment.urlJobOffers + `${id}`)
  }

  // POST JOB OFFER
  public postOffer(offer: JobOfferModelPost): Observable<JobOfferModelAPI> {
    return this.httpClient.post<JobOfferModelAPI>(environment.urlJobOffers, offer)
  }


  // PATCH DEVELEPER IN JOB OFFER
  public updateOfferWithUser(offerId: string, userId: string): Observable<JobOfferModelAPI> {
    const url = environment.urlJobOffers + `${offerId}`;
    const data = { applicants: [userId]};
    return this.httpClient.patch<JobOfferModelAPI>(url, data)
  }

  // PATCH OFFER IN COMPANY.LISTOFFERS
  public postOfferOnCompany(companyId: string, offerId: string): Observable<CompanyModelAPI> {
    const url = environment.urlCompany + `${companyId}`;
    const data = { listOffers: [offerId]};
    return this.httpClient.patch<CompanyModelAPI>(url, data)
  }

  // PATCH JOB OFFER IN DEVELOPER
  public updateUserWithOffer(userId: string, offerId: string): Observable<JobOfferModelAPI> {
    const url = environment.urlDevelopers + `${userId}`;
    const data = { jobOffers: [offerId]};
    return this.httpClient.patch<JobOfferModelAPI>(url, data)
  }
}
