import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningHomePageRoutingModule } from './learning-home-routing.module';

import { LearningHomePage } from './learning-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningHomePageRoutingModule
  ],
  declarations: [LearningHomePage]
})
export class LearningHomePageModule {}
