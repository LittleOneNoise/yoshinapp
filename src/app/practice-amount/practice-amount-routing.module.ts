import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeAmountPage } from './practice-amount.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeAmountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeAmountPageRoutingModule {}
