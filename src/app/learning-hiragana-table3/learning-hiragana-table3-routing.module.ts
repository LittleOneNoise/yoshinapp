import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningHiraganaTable3Page } from './learning-hiragana-table3.page';

const routes: Routes = [
  {
    path: '',
    component: LearningHiraganaTable3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningHiraganaTable3PageRoutingModule {}
