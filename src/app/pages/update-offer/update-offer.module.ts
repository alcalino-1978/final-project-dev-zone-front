import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateOfferRoutingModule } from './update-offer-routing.module';
import { UpdateOfferComponent } from './update-offer.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    UpdateOfferComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UpdateOfferRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    TextFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule
  ]
})
export class UpdateOfferModule { }
