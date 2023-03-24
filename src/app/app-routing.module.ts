import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@shared/auth.guard';
import { RegisterModule } from './pages/register/register.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'breeds/:id',
    loadChildren: () => import('@pages/home/components/detail-cat/detail-cat.module').then(m => m.DetailCatModule)
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
  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
