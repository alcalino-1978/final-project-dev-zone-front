import { JobOfferModel, JobOfferModelAPI } from './../../../../models/joboffer.model';
import { JobofferService } from './../../../../shared/services/joboffer.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-offer',
  templateUrl: './detail-offer.component.html',
  styleUrls: ['./detail-offer.component.scss']
})
export class DetailOfferComponent {
  public offerDetail!: JobOfferModelAPI;
  public isLoading: boolean = false;
  public userId: any = window.localStorage.getItem('_id');
  public applicantsCount!: number;

  // public rating: number = 2;
  // public starCount: number = 5;

  constructor(
    private activatedRouter: ActivatedRoute,
    private jobofferService: JobofferService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params => {
        this.getOffer(params['id']);
      }
    )
  }

  private getOffer(id: string): void {
    this.isLoading = true;
    this.jobofferService.getOfferbyID(id).subscribe(
      (data: JobOfferModelAPI) => {
        this.offerDetail = data;
        const applicantsLength = data.applicants.length;
        this.applicantsCount = applicantsLength;
        this.isLoading = false;
      }, (error) => {
        console.log('ay madre mia.. el BICHOOO')
      }
    )
  }

  public backWithLocation() {
    this.location.back();
  }

  public jobOfferRegistration(offerId: string): void {
    this.isLoading = true;
    this.jobofferService.offerRegistration(offerId, this.userId)
    .subscribe((data: JobOfferModelAPI) => {
      console.log(data);
    })
    this.jobofferService.updateUserJobOffers(this.userId, offerId)
    .subscribe((data: JobOfferModelAPI) => {
      console.log(data);
    })
    this.isLoading = false;
  }

  public assignOfferToUser(offerId: string): void {
    this.jobofferService.updateUserJobOffers(this.userId, offerId)
    .subscribe((data: JobOfferModelAPI) => {
      console.log(data);
    })
  }
}
