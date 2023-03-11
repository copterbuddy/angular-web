import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './page/landing/landing.component';
import { LearningComponent } from './page/learning/learning.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'learningpage', component: LearningComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
