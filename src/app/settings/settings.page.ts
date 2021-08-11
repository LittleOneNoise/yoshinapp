import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { StatsService } from '../service/stats.service';
declare var window;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private modalController: ModalController, private alertController: AlertController, public statsService: StatsService) { }

  nav_fx_sound: HTMLAudioElement = new Audio();
  soundEnabled: boolean = true;

  async ngOnInit() {
    this.nav_fx_sound.src = "../../assets/sounds/button_click_perc_sound_soft.wav";
    this.nav_fx_sound.load();
    this.soundEnabled = await this.statsService.checkSoundState();
  }

  async closeModal(){
    const onClosedData: string =  "Wrapped Up!";
    this.nav_fx_sound.play();
    await this.modalController.dismiss(onClosedData);
  }

  async updateSoundState(){
    this.soundEnabled = await this.statsService.checkSoundState();
  }

  async toggleSound(mode: boolean){
        this.nav_fx_sound.play();
        this.statsService.set("sound", mode);
        this.soundEnabled = mode;
        window
  }

  async clearStatsAlertConfirm() {
    this.nav_fx_sound.play();
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

}
