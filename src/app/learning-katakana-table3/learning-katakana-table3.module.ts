import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningKatakanaTable3PageRoutingModule } from './learning-katakana-table3-routing.module';

import { LearningKatakanaTable3Page } from './learning-katakana-table3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningKatakanaTable3PageRoutingModule
  ],
  declarations: [LearningKatakanaTable3Page]
})
export class LearningKatakanaTable3PageModule {}
