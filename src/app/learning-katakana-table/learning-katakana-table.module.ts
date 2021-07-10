import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningKatakanaTablePageRoutingModule } from './learning-katakana-table-routing.module';

import { LearningKatakanaTablePage } from './learning-katakana-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningKatakanaTablePageRoutingModule
  ],
  declarations: [LearningKatakanaTablePage]
})
export class LearningKatakanaTablePageModule {}
