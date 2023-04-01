import { JobOfferModel, JobOfferModelAPI, JobOfferApplicantsModel } from './../../../../models/joboffer.model';
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
  public offerDescription!: string;
  public isLoading: boolean = false;
  public userId: any = window.localStorage.getItem('_id');
  public applicantsCount!: number;
  public isDisabled!: boolean;
  public isAvailable!: boolean;
  public buttonApplyName: string = 'OFFER-DETAIL.APPLY';

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
    );
  }

  private getOffer(id: string): void {
    this.isLoading = true;

    this.jobofferService.getOfferbyID(id).subscribe(
      (data: JobOfferModelAPI) => {
        this.offerDetail = data;
        const applicantsLength = data.applicants.length;
        this.applicantsCount = applicantsLength;
        this.offerDescription = data.description;

        if (!data.offerStatus){
           this.isDisabled = true;
           this.isAvailable = true;
        } else {
           this.isDisabled = false;
           this.isAvailable = false;
        }

        data.applicants.filter((developer: JobOfferApplicantsModel) => {
          if(developer._id === this.userId) {
             this.isDisabled = true;
             this.buttonApplyName = 'OFFER-DETAIL.APPLIED';
          } else {
             this.isDisabled = false;
          }
        });

        this.isLoading = false;
      }
    )
  }

  public formatDescription(): string {
    return this.offerDescription.replace(/\n/g, '<br>');
  }

  public backWithLocation() {
    this.location.back();
  }

  public jobOfferRegistration(offerId: string): void {
    this.isLoading = true;
    this.jobofferService.updateOfferWithUser(offerId, this.userId)
    .subscribe((data: JobOfferModelAPI) => {
      console.log(data);
    })
    this.jobofferService.updateUserWithOffer(this.userId, offerId)
    .subscribe((data: JobOfferModelAPI) => {
      console.log(data);
    })
    this.isDisabled = true;
    this.isLoading = false;
  }
}
