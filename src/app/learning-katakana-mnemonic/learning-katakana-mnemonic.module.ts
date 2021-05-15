import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningKatakanaMnemonicPageRoutingModule } from './learning-katakana-mnemonic-routing.module';

import { LearningKatakanaMnemonicPage } from './learning-katakana-mnemonic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningKatakanaMnemonicPageRoutingModule
  ],
  declarations: [LearningKatakanaMnemonicPage]
})
export class LearningKatakanaMnemonicPageModule {}
