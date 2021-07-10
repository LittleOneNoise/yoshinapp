import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';
import { SuperTabsConfig } from '@ionic-super-tabs/core'
import { LearningKatakanaTable1Page } from '../learning-katakana-table1/learning-katakana-table1.page';
import { LearningKatakanaTable2Page } from '../learning-katakana-table2/learning-katakana-table2.page';
import { LearningKatakanaTable3Page } from '../learning-katakana-table3/learning-katakana-table3.page';
import { LearningKatakanaTable4Page } from '../learning-katakana-table4/learning-katakana-table4.page';

@Component({
  selector: 'app-learning-katakana-table',
  templateUrl: './learning-katakana-table.page.html',
  styleUrls: ['./learning-katakana-table.page.scss'],
})
export class LearningKatakanaTablePage implements OnInit {

  table1 = LearningKatakanaTable1Page;
  table2 = LearningKatakanaTable2Page;
  table3 = LearningKatakanaTable3Page;
  table4 = LearningKatakanaTable4Page

  constructor(private modalController: ModalController) { }

  async settingsPopup(){
    const modal = await this.modalController.create({
      component: SettingsPage,
      cssClass: 'modalCss'
    });
  
    return await modal.present();
  }


  ngOnInit() {
  }
  
  config: SuperTabsConfig = {
    allowElementScroll: true,
    // shortSwipeDuration: 180,
	  // dragThreshold: 40,
    
  }

}
