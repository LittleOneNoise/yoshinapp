import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningKatakanaTable2PageRoutingModule } from './learning-katakana-table2-routing.module';

import { LearningKatakanaTable2Page } from './learning-katakana-table2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningKatakanaTable2PageRoutingModule
  ],
  declarations: [LearningKatakanaTable2Page]
})
export class LearningKatakanaTable2PageModule {}
