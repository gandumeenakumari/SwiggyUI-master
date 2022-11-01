import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
  path:'login',
  component:LoginComponent
},
{
  path:'forgot-password',
  component:ForgotPasswordComponent
},
{
  path:'register',
  component:RegisterComponent
},

{
  path:'home',
  component:HomeComponent,
  canActivate:[AuthGuard]
},
{
  path:'product',
  component:ProductComponent
},
{
  path:'',
  redirectTo:'login',
  pathMatch:'full'
},
{
  path:'**',
  component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
