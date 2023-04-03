import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValueRoutingModule } from './value.routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    ValueRoutingModule
  ]
})
export class ValueModule { }
