import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningMnemonicPageRoutingModule } from './learning-mnemonic-routing.module';

import { LearningMnemonicPage } from './learning-mnemonic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningMnemonicPageRoutingModule
  ],
  declarations: [LearningMnemonicPage]
})
export class LearningMnemonicPageModule {}
