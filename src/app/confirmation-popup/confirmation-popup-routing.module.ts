import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationPopupPage } from './confirmation-popup.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationPopupPageRoutingModule {}
