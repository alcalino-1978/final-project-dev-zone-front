import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';

import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { BannerHeroComponent } from './components/banner-hero/banner-hero.component';
import { ListOffersComponent } from './components/list-offers/list-offers.component';
import { CarrucelComponent } from './components/carrucel/carrucel.component';








@NgModule({
  declarations: [
    HomeComponent,
    BannerHeroComponent,
    ListOffersComponent,
    CarrucelComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    // Material
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
  ]
})
export class HomeModule { }
