import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './page/landing/landing.component';
import { LearningComponent } from './page/learning/learning.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'learningpage', component: LearningComponent },
  { path: 'login', loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
