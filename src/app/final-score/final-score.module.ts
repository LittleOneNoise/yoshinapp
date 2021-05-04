import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalScorePageRoutingModule } from './final-score-routing.module';

import { FinalScorePage } from './final-score.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalScorePageRoutingModule
  ],
  declarations: [FinalScorePage]
})
export class FinalScorePageModule {}
