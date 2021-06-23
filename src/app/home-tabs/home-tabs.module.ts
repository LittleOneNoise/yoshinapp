import { LearningHomePageModule } from './../learning-home/learning-home.module';
import { PracticeHomePageModule } from './../practice-home/practice-home.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTabsPageRoutingModule } from './home-tabs-routing.module';

import { HomeTabsPage } from './home-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTabsPageRoutingModule,
    SuperTabsModule,
  ],
  declarations: [HomeTabsPage]
})
export class HomeTabsPageModule {}
