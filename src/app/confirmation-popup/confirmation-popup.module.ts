import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPopupPageRoutingModule } from './confirmation-popup-routing.module';

import { ConfirmationPopupPage } from './confirmation-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationPopupPageRoutingModule
  ],
  declarations: [ConfirmationPopupPage]
})
export class ConfirmationPopupPageModule {}
