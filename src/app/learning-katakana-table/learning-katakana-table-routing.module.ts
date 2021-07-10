import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningKatakanaTablePage } from './learning-katakana-table.page';

const routes: Routes = [
  {
    path: '',
    component: LearningKatakanaTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningKatakanaTablePageRoutingModule {}
