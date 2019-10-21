import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InspirationComponent } from './inspiration/inspiration.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CountDownComponent } from './inspiration/count-down/count-down.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'inspiration', component:InspirationComponent, canActivate:[AuthGuard]},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'count-down', component:CountDownComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
