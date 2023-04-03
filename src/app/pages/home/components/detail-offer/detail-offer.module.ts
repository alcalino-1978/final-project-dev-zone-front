import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailOfferRoutingModule } from './detail-offer-routing.module';
import { DetailOfferComponent } from './detail-offer.component';


@NgModule({
  declarations: [
    DetailOfferComponent
  ],
  imports: [
    CommonModule,
    DetailOfferRoutingModule,
    SharedModule,
    DetailOfferRoutingModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class DetailOfferModule { }
