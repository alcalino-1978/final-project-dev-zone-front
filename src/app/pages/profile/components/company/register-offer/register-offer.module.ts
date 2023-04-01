import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterOfferRoutingModule } from './register-offer-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegisterOfferRoutingModule
  ]
})
export class RegisterOfferModule { }
