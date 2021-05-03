import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningHiraganaTable1Page } from './learning-hiragana-table1.page';

const routes: Routes = [
  {
    path: '',
    component: LearningHiraganaTable1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningHiraganaTable1PageRoutingModule {}
