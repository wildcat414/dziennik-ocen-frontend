import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ManageGradesComponent } from './pages/manage-grades/manage-grades.component';
import { ManageSubjectsComponent } from './pages/manage-subjects/manage-subjects.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { StudentGradesComponent } from './pages/student-grades/student-grades.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: '',   redirectTo: '/home-page', pathMatch: 'full' },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'manage-subjects', component: ManageSubjectsComponent },
  { path: 'manage-grades', component: ManageGradesComponent },
  { path: 'student-grades', component: StudentGradesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
