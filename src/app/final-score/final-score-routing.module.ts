import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalScorePage } from './final-score.page';

const routes: Routes = [
  {
    path: '',
    component: FinalScorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalScorePageRoutingModule {}
