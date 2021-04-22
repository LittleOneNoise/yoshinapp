import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticeAmountPageRoutingModule } from './practice-amount-routing.module';

import { PracticeAmountPage } from './practice-amount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeAmountPageRoutingModule
  ],
  declarations: [PracticeAmountPage]
})
export class PracticeAmountPageModule {}
