import { FilterSearchPipe } from './pipes/filter-search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoaderComponent } from './components/loader/loader.component';

import { ChatbotComponent } from './components/chatbot/chatbot.component';

@NgModule({
  declarations: [
    LoaderComponent,
    ChatbotComponent,
    FilterSearchPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    // Material
    MatProgressSpinnerModule,


  ],
  exports: [
    TranslateModule,
    LoaderComponent,
    FilterSearchPipe
  ]
})
export class SharedModule { }
