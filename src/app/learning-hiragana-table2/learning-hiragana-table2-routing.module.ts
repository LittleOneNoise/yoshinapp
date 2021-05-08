import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningHiraganaTable2Page } from './learning-hiragana-table2.page';

const routes: Routes = [
  {
    path: '',
    component: LearningHiraganaTable2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningHiraganaTable2PageRoutingModule {}
