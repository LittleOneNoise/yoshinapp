import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningHiraganaTablePage } from './learning-hiragana-table.page';

const routes: Routes = [
  {
    path: '',
    component: LearningHiraganaTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningHiraganaTablePageRoutingModule {}
