import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoKanaPageRoutingModule } from './info-kana-routing.module';

import { InfoKanaPage } from './info-kana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoKanaPageRoutingModule
  ],
  declarations: [InfoKanaPage]
})
export class InfoKanaPageModule {}
