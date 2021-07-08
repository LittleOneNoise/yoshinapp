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
    const modal = await this.modalController.create({
      component: SettingsPage,
      cssClass: 'modalCss'
    });
  
    return await modal.present();
  }

  audio: HTMLAudioElement;

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = "../../assets/sounds/pop_nav.mp3";
    this.audio.load();
  }

  testaudio(){
    console.log("click");
    
    this.audio.play();
  }

}
