import { AlertController, ModalController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { StatsService } from '../service/stats.service';
// import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { waitForAsync } from '@angular/core/testing';
declare var window;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private modalController: ModalController, private alertController: AlertController, public statsService: StatsService, private platform: Platform, private iab: InAppBrowser) { }

  nav_fx_sound: HTMLAudioElement = new Audio();
  soundEnabled: boolean = true;

  async ngOnInit() {
    this.nav_fx_sound.src = "../../assets/sounds/SD_Click.mp3";
    this.nav_fx_sound.load();
    this.soundEnabled = await this.statsService.checkSoundState();
  }

  async closeModal(){
    const onClosedData: string =  "Wrapped Up!";
    if(await this.statsService.checkSoundState()){
      this.nav_fx_sound.play();
    }
    // console.log("agagaga")
    // window.quizz.subscriptionBack = this.platform.backButton.subscribeWithPriority(9999, () => {
    //   console.log('Setting back button to leave quizz!');
    //   window.home.leaveQuizz():
    //   console.log("SUBSCRIPTION TO QUIT QUIZZ WITH BACK : ");
    // });

    await this.modalController.dismiss(onClosedData);
  }

  async updateSoundState(){
    this.soundEnabled = await this.statsService.checkSoundState();
  }

  async toggleSound(mode: boolean){
        this.nav_fx_sound.play();
        this.statsService.set("sound", mode);
        this.soundEnabled = mode;
  }

  async clearStatsAlertConfirm() {
    if(await this.statsService.checkSoundState()){
      this.nav_fx_sound.play();
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Warning',
      message: 'Are you sure you want to delete all your stats? You won\'t be able to cancel once you do.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel stats deletion');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Deleting stats...');
            this.statsService.clearAll();
            // this.ionViewWillEnter();
            window.stats.ngOnInit();
          }
        }
      ]
    });

    await alert.present();
  }

  goToGithub(){
    // this.browserTab.isAvailable()
    // .then(isAvailable => {
    //   if (isAvailable) {
    //     this.browserTab.openUrl('https://github.com/LittleOneNoise/yoshinapp');
    //   } else {
    //     this.iab.create('https://github.com/LittleOneNoise/yoshinapp','_system');
    //   }
    // });
    this.iab.create('https://github.com/LittleOneNoise/yoshinapp','_system');
  }

  goToDonation(){
    this.iab.create('https://www.paypal.com/donate?hosted_button_id=57K63FKPK3WXC','_system');
  }
  

}
