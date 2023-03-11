import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LearningComponent } from '../../page/learning/learning.component';
import { SharedModule } from '../../shared/shared.module';


const routes = [
  { path: '', component: LearningComponent }
];

@NgModule({
  declarations: [LearningComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class LearningModule { }
