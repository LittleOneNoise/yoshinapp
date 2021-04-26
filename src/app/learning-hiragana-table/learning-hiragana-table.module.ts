import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningHiraganaTablePageRoutingModule } from './learning-hiragana-table-routing.module';

import { LearningHiraganaTablePage } from './learning-hiragana-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningHiraganaTablePageRoutingModule
  ],
  declarations: [LearningHiraganaTablePage]
})
export class LearningHiraganaTablePageModule {}
