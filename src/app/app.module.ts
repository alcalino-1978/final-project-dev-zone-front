import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { MatTabsModule } from '@angular/material/tabs';

import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatOption, MatOptionModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { ThemeToggler } from '@shared/services/theme.service';
import { SharedModule } from '@shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';


import { DeveloperComponent } from '@pages/profile/components/developer/developer.component';
import { CompanyComponent } from '@pages/profile/components/company/company.component';
import { ProfileModule } from '@pages/profile/profile.module';
import { NewLinePipe } from './pipes/new-line.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UpdateUserComponent,
    QuienesSomosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatOptionModule,
    MatChipsModule,
    
    MatIconModule,
    MatPseudoCheckboxModule,
    ReactiveFormsModule,
    MatTabsModule,
    ProfileModule
  ],
  providers: [ThemeToggler],
  bootstrap: [AppComponent]
})
export class AppModule { }
