import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticeHomePageRoutingModule } from './practice-home-routing.module';

import { PracticeHomePage } from './practice-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeHomePageRoutingModule
  ],
  declarations: [PracticeHomePage]
})
export class PracticeHomePageModule {}
