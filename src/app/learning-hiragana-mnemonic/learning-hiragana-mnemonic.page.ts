import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SettingsPage } from '../settings/settings.page';

@Component({
  selector: 'app-learning-hiragana-mnemonic',
  templateUrl: './learning-hiragana-mnemonic.page.html',
  styleUrls: ['./learning-hiragana-mnemonic.page.scss'],
})
export class LearningHiraganaMnemonicPage implements OnInit {

  constructor(private modalController: ModalController) { }

  async settingsPopup(){
    this.nav_fx_sound.play();
    const modal = await this.modalController.create({
      component: SettingsPage,
      cssClass: 'modalCss'
    });
  
    return await modal.present();
  }

  nav_fx_sound: HTMLAudioElement = new Audio();

  ngOnInit() {
    this.nav_fx_sound.src = "../../assets/sounds/button_click_perc_sound_soft.wav";
    this.nav_fx_sound.load();
  }

  testaudio(){
    console.log("click");
    
    this.nav_fx_sound.play();
  }

}
