import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto.routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    ProyectoRoutingModule
  ]
})
export class ProyectoModule { }
