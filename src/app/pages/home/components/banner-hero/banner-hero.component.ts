import { SearchValueService } from './../../../../shared/services/search-value.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { CatApiService } from '@shared/services/catApi.service';
import { CatModelUnsplashAPI } from 'src/app/models/developer.model';

@Component({
  selector: 'app-banner-hero',
  templateUrl: './banner-hero.component.html',
  styleUrls: ['./banner-hero.component.scss']
})
export class BannerHeroComponent {
  public isLoading: boolean = false;
  public catRandom!: CatModelUnsplashAPI;
  public randomImageUrl!: string;

  public filter: string = '';

  constructor(
    private catApiService : CatApiService,
    private searchValueService: SearchValueService,
    @Inject(DOCUMENT) private document: Document,
    ) { }

  ngOnInit(): void {
    this.getCatRandom();
  }
  private getCatRandom(): void {
    this.isLoading = true;
    this.catApiService.getCatRandom().subscribe(
      (response: CatModelUnsplashAPI) => {
        this.catRandom= response;
        this.randomImageUrl= this.catRandom.urls.regular;
        // console.log(response.urls.full)
        this.isLoading = false;
      }, (error) => {
      });
  }

  OnSubmit() {
    console.log(this.filter);
     this.searchValueService.getData(this.filter);
  };

}
