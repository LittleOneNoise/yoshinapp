import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningHiraganaMenuPageRoutingModule } from './learning-hiragana-menu-routing.module';

import { LearningHiraganaMenuPage } from './learning-hiragana-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningHiraganaMenuPageRoutingModule
  ],
  declarations: [LearningHiraganaMenuPage]
})
export class LearningHiraganaMenuPageModule {}
