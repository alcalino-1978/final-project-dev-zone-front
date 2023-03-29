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

  private subscription!: Subscription;

  constructor(
    private jobofferService: JobofferService,
    private searchValueService: SearchValueService,
  ) {}

  ngOnInit(): void {
    this.getOfferList();
    this.getSearchValue()
  }

  private getOfferList(): void {
    this.isLoading = true;
    this.jobofferService.getOffer().subscribe(
      (data: JobOfferModelAPI[]) => {
        this.offerList = data;
        this.isLoading = false;
      });
  }

  public getOfferDetail(id: any): void {
    console.log(id);
  }

  private getSearchValue(): void {
    this.subscription = this.searchValueService.sendData().subscribe((data: string) => {
      if (data) {
        this.filter = data;
      }
    })
  }

}
