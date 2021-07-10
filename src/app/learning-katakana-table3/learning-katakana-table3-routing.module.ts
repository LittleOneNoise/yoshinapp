import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningKatakanaTable3Page } from './learning-katakana-table3.page';

const routes: Routes = [
  {
    path: '',
    component: LearningKatakanaTable3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningKatakanaTable3PageRoutingModule {}
