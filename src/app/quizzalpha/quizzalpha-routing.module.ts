import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizzalphaPage } from './quizzalpha.page';

const routes: Routes = [
  {
    path: '',
    component: QuizzalphaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzalphaPageRoutingModule {}
