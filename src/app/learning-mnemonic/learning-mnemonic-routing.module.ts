import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningMnemonicPage } from './learning-mnemonic.page';

const routes: Routes = [
  {
    path: '',
    component: LearningMnemonicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningMnemonicPageRoutingModule {}
