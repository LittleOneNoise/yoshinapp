import { PracticeHomePage } from './../practice-home/practice-home.page';
import { LearningHomePage } from './../learning-home/learning-home.page';
import { StatisticsPage } from './../statistics/statistics.page';
import { Component, OnInit} from '@angular/core';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;
import { Platform, IonRouterOutlet, ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { StatsService } from '../service/stats.service';
import { Subscription } from 'rxjs';
declare var window;

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
  nav_fx_sound: HTMLAudioElement = new Audio();
  subscriptionBack: Subscription;

  constructor( private platform: Platform, private routerOutlet: IonRouterOutlet, private modalController: ModalController, private statsService: StatsService) {
    window.home = this;
    
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
          window.stats.ngOnInit();
          break;
      }

    }
  }

  async settingsPopup(){
    const modal = await this.modalController.create({
      component: SettingsPage,
      cssClass: 'modalCss'
    });
  
    if(await this.statsService.checkSoundState()){
      this.nav_fx_sound.play();
    }
    return await modal.present();
  }

  superTabConfig: SuperTabsConfig = {
    maxDragAngle: 100,
    transitionDuration: 190,
    
  };

 
  

  ngOnInit() {
    this.nav_fx_sound.src = "../../assets/sounds/button_click_perc_sound_soft.wav";
    this.nav_fx_sound.load();
  }

  ionViewWillEnter(){
    // this.subscriptionBack = this.platform.backButton.subscribeWithPriority(9999, () => {
    //   //do nothing
    //   console.log("SUBSCRIPTION TO DO NOTHING WITH BACK ");
    // });

    
    // this.subscriptionBack.unsubscribe();
    // console.log("UNSUBSCRIPTION TO DO NOTHING WITH BACK ");
  }

}
