import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningHomePage } from './learning-home.page';

const routes: Routes = [
  {
    path: '',
    component: LearningHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningHomePageRoutingModule {}
