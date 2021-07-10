import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningKatakanaTable4Page } from './learning-katakana-table4.page';

const routes: Routes = [
  {
    path: '',
    component: LearningKatakanaTable4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningKatakanaTable4PageRoutingModule {}
