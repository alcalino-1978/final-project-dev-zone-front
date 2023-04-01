import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '@shared/shared.module';
import { DeveloperComponent } from './components/developer/developer.component';
import { CompanyComponent } from './components/company/company.component';
import { ProfileComponent } from './profile.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    ProfileComponent,
    DeveloperComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
    MatDividerModule
  ],
  exports: [
    ProfileComponent
  ],
})
export class ProfileModule { }
