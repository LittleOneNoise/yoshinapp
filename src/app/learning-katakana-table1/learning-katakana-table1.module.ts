import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningKatakanaTable1PageRoutingModule } from './learning-katakana-table1-routing.module';

import { LearningKatakanaTable1Page } from './learning-katakana-table1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningKatakanaTable1PageRoutingModule
  ],
  declarations: [LearningKatakanaTable1Page]
})
export class LearningKatakanaTable1PageModule {}
