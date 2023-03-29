import { JobOfferModel, JobOfferModelAPI } from './../../models/joboffer.model';
import { JobofferService } from './../../shared/services/joboffer.service';
import { Component, ElementRef, HostBinding } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public isLoading: boolean = false;
  containerClasses = "home";

  //Search Input
  public filter: any = '';
  public offerList: JobOfferModel[] = [] ;

  constructor(
    private elRef:ElementRef,
    private jobofferService: JobofferService,
    private domSanitizer: DomSanitizer
  ) { }
  ngAfterViewInit() {
    this.elRef.nativeElement.parentElement.classList.add(this.containerClasses);
  }
  ngOnInit(): void {
    // this.getListItems();
    console.log(this.filter);
    this.getOffers();
  }

  // private getListItems(): void {
  //   // llamada asincrona a la API
  //   this.isLoading = true;
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 2000);
  // }

  private getOffers(): void {
    this.jobofferService.getOffer().subscribe((data: JobOfferModelAPI[]) => {
      this.offerList = data;
    });
  }


  OnSubmit() {
    console.log(this.filter);
     // this.searchValueService.getData(this.filter);

  };

}
