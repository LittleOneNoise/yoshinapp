import { PracticeHomePage } from './../practice-home/practice-home.page';
import { LearningHomePage } from './../learning-home/learning-home.page';
import { StatisticsPage } from './../statistics/statistics.page';
import { Component, OnInit} from '@angular/core';
import { App } from '@capacitor/core';
import { Platform, IonRouterOutlet, ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';
import { SuperTabsConfig } from '@ionic-super-tabs/core';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.page.html',
  styleUrls: ['./home-tabs.page.scss'],
})
export class HomeTabsPage implements OnInit {

  title: string = "Learning";

  practice = PracticeHomePage;
  learning = LearningHomePage;
  stats = StatisticsPage;

  constructor( private platform: Platform, private routerOutlet: IonRouterOutlet, private modalController: ModalController) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }

  onTabSelect(ev: any) {
    // console.log(ev);
    // console.log(ev.detail.index);
    if (ev.detail.changed == true){
      this.title = ev.id;
      switch(ev.detail.index){
        case 0:
          this.title = 'Practice';
          break;
        case 1:
          this.title = 'Learning';
          break;
        case 2:
          this.title = 'Statistics';
          break;
      }

    }
  }

  async settingsPopup(){
    const modal = await this.modalController.create({
      component: SettingsPage,
      cssClass: 'modalCss'
    });
  
    return await modal.present();
  }

  superTabConfig: SuperTabsConfig = {
    maxDragAngle: 100,
    transitionDuration: 190,
    
  };

 
  

  ngOnInit() {
  }

}
