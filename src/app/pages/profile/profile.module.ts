import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '@shared/shared.module';
import { DeveloperComponent } from './components/developer/developer.component';
import { CompanyComponent } from './components/company/company.component';
import { RegisterOfferComponent } from './components/company/register-offer/register-offer.component';
import { ProfileComponent } from './profile.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    ProfileComponent,
    DeveloperComponent,
    CompanyComponent,
    RegisterOfferComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    ProfileRoutingModule,
    MatDividerModule,
    TextFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  exports: [
    ProfileComponent
  ],
})
export class ProfileModule { }
