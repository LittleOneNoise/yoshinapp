import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeHomePage } from './practice-home.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeHomePageRoutingModule {}
