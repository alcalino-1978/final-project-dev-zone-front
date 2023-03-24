import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCatComponent } from './detail-cat.component';

const routes: Routes = [
  {
    path: '',
    component: DetailCatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCatRoutingModule { }
