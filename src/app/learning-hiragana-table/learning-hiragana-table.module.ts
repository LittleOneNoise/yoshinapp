import { LearningHiraganaTable1PageModule } from './../learning-hiragana-table1/learning-hiragana-table1.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningHiraganaTablePageRoutingModule } from './learning-hiragana-table-routing.module';

import { LearningHiraganaTablePage } from './learning-hiragana-table.page';
import { LearningHiraganaTable2PageModule } from '../learning-hiragana-table2/learning-hiragana-table2.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningHiraganaTablePageRoutingModule,
    SuperTabsModule,
    LearningHiraganaTable1PageModule,
    LearningHiraganaTable2PageModule
  ],
  declarations: [LearningHiraganaTablePage]
})
export class LearningHiraganaTablePageModule {}
