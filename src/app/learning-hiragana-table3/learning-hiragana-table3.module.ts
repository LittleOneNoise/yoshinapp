import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningHiraganaTable3PageRoutingModule } from './learning-hiragana-table3-routing.module';

import { LearningHiraganaTable3Page } from './learning-hiragana-table3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningHiraganaTable3PageRoutingModule
  ],
  declarations: [LearningHiraganaTable3Page]
})
export class LearningHiraganaTable3PageModule {}
