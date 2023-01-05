import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'user-login', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
