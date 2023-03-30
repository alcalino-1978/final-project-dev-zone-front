import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'offers/:id',
    loadChildren: () => import('@pages/home/components/detail-offer/detail-offer.module').then(m => m.DetailOfferModule)
  },
  {
    path: 'register',
    loadChildren: () => import('@pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('@pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('@pages/profile/profile.module').then(m => m.ProfileModule),
    // canActivate: [AuthGuard]
  }
  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
