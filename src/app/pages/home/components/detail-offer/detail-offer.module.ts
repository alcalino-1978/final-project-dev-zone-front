import { SharedModule } from '@shared/shared.module';
import { RatingComponent } from './../detail-cat/rating/rating.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailOfferRoutingModule } from './detail-offer-routing.module';
import { DetailOfferComponent } from './detail-offer.component';


@NgModule({
  declarations: [
    DetailOfferComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    DetailOfferRoutingModule,
    SharedModule,
    DetailOfferRoutingModule

  ]
})
export class DetailOfferModule { }
