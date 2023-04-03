import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

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
import { MatOptionModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { RegisterComponent } from './pages/register/register.component';
import { ThemeToggler } from '@shared/services/theme.service';
import { SharedModule } from '@shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule} from '@angular/material/chips';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { ProfileModule } from '@pages/profile/profile.module';
import { ValueComponent } from './pages/value/value.component';
import { ProyectoComponent } from './pages/proyecto/proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UpdateUserComponent,
    QuienesSomosComponent,
    ValueComponent,
    ProyectoComponent
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
