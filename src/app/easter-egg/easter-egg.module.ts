import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EasterEggPageRoutingModule } from './easter-egg-routing.module';

import { EasterEggPage } from './easter-egg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EasterEggPageRoutingModule
  ],
  declarations: [EasterEggPage]
})
export class EasterEggPageModule {}
