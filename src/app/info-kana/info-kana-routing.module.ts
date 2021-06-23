import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoKanaPage } from './info-kana.page';

const routes: Routes = [
  {
    path: '',
    component: InfoKanaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoKanaPageRoutingModule {}
