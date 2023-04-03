import { Router } from '@angular/router';
import { CompanyService } from './../../../../shared/services/company.service';
import { CompanyModelAPI } from 'src/app/models/company.models';

import { Component } from '@angular/core';

@Component({
  selector: 'app-carrucel',
  templateUrl: './carrucel.component.html',
  styleUrls: ['./carrucel.component.scss']
})
export class CarrucelComponent {
  public listCompany: CompanyModelAPI[] = [];
  public isLoading: boolean = false;
  public filter: string = '';

  constructor(
    private CompanyService: CompanyService,
    private Router: Router,
    
  ) {}

  ngOnInit(): void {
    this.getCompanyList();    
  }

  private getCompanyList(): void {
    this.isLoading = true;
    this.CompanyService.getAllCompanies().subscribe(
      (data: CompanyModelAPI[]) => {
        this.listCompany = data;
        this.isLoading = false;
      });
  }
}
