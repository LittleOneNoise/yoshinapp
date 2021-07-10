import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningKatakanaTable4PageRoutingModule } from './learning-katakana-table4-routing.module';

import { LearningKatakanaTable4Page } from './learning-katakana-table4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningKatakanaTable4PageRoutingModule
  ],
  declarations: [LearningKatakanaTable4Page]
})
export class LearningKatakanaTable4PageModule {}
