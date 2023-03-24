import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';
import { ListCatComponent } from './components/list-cat/list-cat.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { BannerHeroComponent } from './components/banner-hero/banner-hero.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListCatComponent,
    BannerHeroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    // Material
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
  ]
})
export class HomeModule { }
