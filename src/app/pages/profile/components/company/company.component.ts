import { AuthService } from '@shared/services/auth.service';
import { Router } from '@angular/router';
import { JobofferService } from './../../../../shared/services/joboffer.service';
import { Component, Input } from '@angular/core';
import { CompanyModelAPI } from 'src/app/models/company.models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  @Input() data!: any;
  @Input() dataId!: string;
  @Input() deleteUser!: () => void;

  public isLoading: boolean = false;
  public companyData!: CompanyModelAPI;
  public applicantsCount!: number;

  constructor (
    private jobOfferService: JobofferService,
    private router: Router,
    private authService: AuthService
  ) { }

  public onDeleteUser(): void {
    this.deleteUser();
  }

  ngOnInit(): void {
    console.log(this.data);
    this.getCompanyByID(this.dataId);

  }

  public getOfferDetail(id: string): void {
    console.log(id);
    this.router.navigateByUrl(`/offers/${id}`)
  }

  public updateOfferDetail(id: string): void {
    console.log(id);
    this.router.navigateByUrl(`/update-offer/${id}`)
  }

  public changeOfferStatus(offerId: string, status: boolean): void {
    this.jobOfferService.updateOfferStatus(offerId, status).subscribe((data) => {
      return console.log(data)
    })
  }

  public deleteOffer(offerId: string): void {
    this.authService.deleteOfferService(offerId).subscribe((response) => {
      console.log(response);
      });
    this.router.navigate(['/'])
  }

  private getCompanyByID(dataId: string): void {
    this.isLoading = true;
    this.jobOfferService.getCompanyByID(dataId).subscribe((res: CompanyModelAPI) => {
      console.log(res);
      this.companyData = res;
      this.isLoading = false
    }
    )
  }
}
