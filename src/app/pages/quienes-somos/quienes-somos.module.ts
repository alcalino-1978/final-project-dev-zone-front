import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuienesSomosRoutingModule
  ]
})
export class QuienesSomosModule { }
