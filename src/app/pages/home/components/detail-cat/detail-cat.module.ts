import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCatRoutingModule } from './detail-cat-routing.module';
import { DetailCatComponent } from './detail-cat.component';
import { RatingComponent } from './rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    DetailCatComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule,
    DetailCatRoutingModule
  ]
})
export class DetailCatModule {}
