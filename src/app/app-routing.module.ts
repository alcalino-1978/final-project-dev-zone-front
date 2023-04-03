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
    canActivate: [AuthGuard]
  },
  {
    path: 'quienes-somos',
    loadChildren: () => import('@pages/quienes-somos/quienes-somos.module').then(m => m.QuienesSomosModule),
  },
  {
    path: 'register-offer',
    loadChildren: () => import('@pages/register-offer/register-offer.module').then(m => m.RegisterOfferModule)
  },
  {
    path: 'value',
    loadChildren: () => import('@pages/value/value.module').then(m => m.ValueModule),
  },
  {
    path: 'proyecto',
    loadChildren: () => import('@pages/proyecto/proyecto.module').then(m => m.ProyectoModule),
  },
  
 // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
