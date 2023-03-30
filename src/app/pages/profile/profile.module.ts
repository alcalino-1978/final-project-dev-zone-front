import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '@shared/shared.module';
import { DeveloperComponent } from './components/developer/developer.component';
import { CompanyComponent } from './components/company/company.component';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [
    DeveloperComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule,
  ],
  exports: [
    DeveloperComponent,
    CompanyComponent,
  ],
})
export class ProfileModule { }
