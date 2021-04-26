import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningHiraganaMnemonicPage } from './learning-hiragana-mnemonic.page';

const routes: Routes = [
  {
    path: '',
    component: LearningHiraganaMnemonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningHiraganaMnemonicPageRoutingModule {}
