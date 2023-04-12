import { SearchValueService } from './../../../../shared/services/search-value.service';
import { JobOfferModelAPI, JobOfferModel } from './../../../../models/joboffer.model';
import { JobofferService } from './../../../../shared/services/joboffer.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.scss']
})
export class ListOffersComponent {
  public offerList: JobOfferModel[] = [];
  public isLoading: boolean = false;
  public filter: string = '';
  public allOfferList: JobOfferModel[] = [];
  public allOrLast:boolean=true;

  private subscription!: Subscription;

  constructor(
    private jobofferService: JobofferService,
    private router: Router,
    private searchValueService: SearchValueService,
  ) {}

  ngOnInit(): void {
    this.getOfferList();
    this.getSearchValue();
    this.getAllOffer();
  }

  private getOfferList(): void {
    this.isLoading = true;
    this.jobofferService.getLastOfferList().subscribe(
      (data: JobOfferModelAPI[]) => {
        this.offerList = data;
        this.isLoading = false;
      });
  }

  private getAllOffer(): void {
    this.isLoading = true;
    this.jobofferService.getOffer().subscribe(
      (data: JobOfferModelAPI[]) => {
        this.allOfferList = data;
        this.isLoading = false;
      });
  }

  public getOfferDetail(id: any): void {
    //console.log(id);
    this.router.navigateByUrl(`/offers/${id}`)

  }

  private getSearchValue(): void {
    this.subscription = this.searchValueService.sendData().subscribe((data: string) => {
      if (data) {
        this.filter = data;
        this.allOrLast = false;
      }
    })
  }

}
