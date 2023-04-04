import { StorageService } from '@shared/services/storage.service';
import { JobOfferModelAPI, JobOfferApplicantsModel, JobOfferModelPut } from './../../../../models/joboffer.model';
import { JobofferService } from './../../../../shared/services/joboffer.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@shared/services/auth.service';


@Component({
  selector: 'app-detail-offer',
  templateUrl: './detail-offer.component.html',
  styleUrls: ['./detail-offer.component.scss']
})
export class DetailOfferComponent {
  public offerDetail!: JobOfferModelAPI;
  public offerDescription!: string;
  public isLoading: boolean = false;
  public userId: string = this.storageService.getUser().user._id;
  public applicantsCount!: number;
  public isDisabled!: boolean;
  public isAvailable!: boolean;
  public buttonApplyName: string = 'OFFER-DETAIL.APPLY';
  public entity!: string;

  public developers: any[] = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private jobofferService: JobofferService,
    private location: Location,
    private authService: AuthService,
    private router: Router,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe(
      params => {
        this.getOffer(params['id']);
      }
    );
    const getEntity = this.storageService.getUser().entityType;
    this.entity = getEntity;
    this.getDevs();
  }

  public deleteOffer(offerId: string): void {
    this.authService.deleteOfferService(offerId).subscribe((response) => {
      console.log(response); // Handle successful response
      });
    this.router.navigate(['/'])
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

  public updateOfferDetail(id: string): void {
    console.log(id);
    this.router.navigateByUrl(`/update-offer/${id}`)
  }


  private getDevs(): void {
    this.authService.getDevelopers()
    .subscribe((data: any) => {
    this.developers = data;
    })
  }

  public formatDescription(): string {
    return this.offerDescription.replace(/\n/g, '<br>');
  }

  public backWithLocation() {
    this.location.back();
  }

  public changeOfferStatus(offerId: string, status: boolean): void {
    this.jobofferService.updateOfferStatus(offerId, status).subscribe((data) => {
      return console.log(data)
    })
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
