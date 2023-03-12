import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './page/landing/landing.component';
import { LearningComponent } from './page/learning/learning.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'learn', component: LearningComponent },
  { path: 'login', component: LoginComponent }
  // { path: 'login', loadChildren: () => import('./shared/components/login/login.component').then(m => m.LoginComponent) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
