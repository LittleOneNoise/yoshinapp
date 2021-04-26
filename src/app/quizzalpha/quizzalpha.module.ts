import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizzalphaPageRoutingModule } from './quizzalpha-routing.module';

import { QuizzalphaPage } from './quizzalpha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizzalphaPageRoutingModule
  ],
  declarations: [QuizzalphaPage]
})
export class QuizzalphaPageModule {}
