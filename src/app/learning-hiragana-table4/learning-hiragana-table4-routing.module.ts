import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningHiraganaTable4Page } from './learning-hiragana-table4.page';

const routes: Routes = [
  {
    path: '',
    component: LearningHiraganaTable4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningHiraganaTable4PageRoutingModule {}
