import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './page/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'learn', loadChildren: () => import('./module/learning/learning.module').then(m => m.LearningModule) },
  { path: 'login', loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
