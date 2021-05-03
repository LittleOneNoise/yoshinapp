import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningHiraganaTable1PageRoutingModule } from './learning-hiragana-table1-routing.module';

import { LearningHiraganaTable1Page } from './learning-hiragana-table1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningHiraganaTable1PageRoutingModule,
    SuperTabsModule
  ],
  declarations: [LearningHiraganaTable1Page],
  entryComponents: [LearningHiraganaTable1Page]
})
export class LearningHiraganaTable1PageModule {}
