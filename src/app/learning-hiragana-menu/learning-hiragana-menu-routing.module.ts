import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningHiraganaMenuPage } from './learning-hiragana-menu.page';

const routes: Routes = [
  {
    path: '',
    component: LearningHiraganaMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningHiraganaMenuPageRoutingModule {}
