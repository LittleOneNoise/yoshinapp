import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningHiraganaMnemonicPageRoutingModule } from './learning-hiragana-mnemonic-routing.module';

import { LearningHiraganaMnemonicPage } from './learning-hiragana-mnemonic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningHiraganaMnemonicPageRoutingModule
  ],
  declarations: [LearningHiraganaMnemonicPage]
})
export class LearningHiraganaMnemonicPageModule {}
