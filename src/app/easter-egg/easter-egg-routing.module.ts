import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasterEggPage } from './easter-egg.page';

const routes: Routes = [
  {
    path: '',
    component: EasterEggPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EasterEggPageRoutingModule {}
