import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningKatakanaMnemonicPage } from './learning-katakana-mnemonic.page';

const routes: Routes = [
  {
    path: '',
    component: LearningKatakanaMnemonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningKatakanaMnemonicPageRoutingModule {}
