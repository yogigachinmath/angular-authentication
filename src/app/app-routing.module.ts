import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { InvalidComponent } from './invalid/invalid.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { IsLoggedGuard } from './auth/is-logged.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, },
  {path: 'admin', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'profile/:username', component: ProfileComponent, },
  {path: 'login', component: LoginComponent, canActivate: [ IsLoggedGuard ]},
  {path: '**', component: InvalidComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
