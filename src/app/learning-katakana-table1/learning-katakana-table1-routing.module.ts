import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningKatakanaTable1Page } from './learning-katakana-table1.page';

const routes: Routes = [
  {
    path: '',
    component: LearningKatakanaTable1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningKatakanaTable1PageRoutingModule {}
