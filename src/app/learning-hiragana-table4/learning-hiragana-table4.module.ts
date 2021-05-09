import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningHiraganaTable4PageRoutingModule } from './learning-hiragana-table4-routing.module';

import { LearningHiraganaTable4Page } from './learning-hiragana-table4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningHiraganaTable4PageRoutingModule
  ],
  declarations: [LearningHiraganaTable4Page]
})
export class LearningHiraganaTable4PageModule {}
