import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningHiraganaTable2PageRoutingModule } from './learning-hiragana-table2-routing.module';

import { LearningHiraganaTable2Page } from './learning-hiragana-table2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningHiraganaTable2PageRoutingModule
  ],
  declarations: [LearningHiraganaTable2Page]
})
export class LearningHiraganaTable2PageModule {}
