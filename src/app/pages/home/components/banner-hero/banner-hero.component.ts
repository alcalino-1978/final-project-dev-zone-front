import { SearchValueService } from './../../../../shared/services/search-value.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { UnsplashModelAPI } from 'src/app/models/unsplash.model';
import { UnsplashService } from '@shared/services/unsplash.service';

@Component({
  selector: 'app-banner-hero',
  templateUrl: './banner-hero.component.html',
  styleUrls: ['./banner-hero.component.scss']
})
export class BannerHeroComponent {
  public isLoading: boolean = false;
  public photoRandom!: UnsplashModelAPI;
  public randomImageUrl!: string;

  public filter: string = '';

  public urlsImagenes = [
    '/assets/banner-hero-03.jpg',
    '/assets/banner-hero-01.jpg',
    '/assets/banner-hero-02.jpg',
    '/assets/banner-hero-04.jpg',
    '/assets/banner-hero-05.jpg',
  ];
  public imagenFondo!: string;

  constructor(
    private unsplashService : UnsplashService,
    private searchValueService: SearchValueService,
    @Inject(DOCUMENT) private document: Document,
    ) { }

  ngOnInit(): void {
    this.getPhotoRandom();
  }
  private getPhotoRandom(): void {
    this.isLoading = true;
    this.unsplashService.getPhotoRandom().subscribe(
      (response: UnsplashModelAPI) => {
        this.photoRandom= response;
        this.randomImageUrl= this.photoRandom.urls.regular;
        // console.log(response.urls.full)
        this.isLoading = false;
      }, (error) => {
      });
  // private getPhotoRandom(): void {
  //   this.isLoading = true;
  //   this.unsplashService.getPhotoRandom().subscribe(
  //     (response: UnsplashModelAPI) => {
  //       this.photoRandom= response;
  //       this.randomImageUrl= this.photoRandom.urls.regular;
  //       // console.log(response.urls.full)
  //       this.isLoading = false;
  //     }, (error) => {
  //     });
  // }
  private getPhotoRandom(): void {
    const randomIndex = Math.floor(Math.random() * this.urlsImagenes.length);
    this.imagenFondo = this.urlsImagenes[randomIndex];
  }

  OnSubmit() {
    console.log(this.filter);
     this.searchValueService.getData(this.filter);
  };

}
