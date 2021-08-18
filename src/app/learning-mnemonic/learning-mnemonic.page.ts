import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';

@Component({
  selector: 'app-learning-mnemonic',
  templateUrl: './learning-mnemonic.page.html',
  styleUrls: ['./learning-mnemonic.page.scss'],
})
export class LearningMnemonicPage implements OnInit {
  
  writingSystem: string;
  results: any;

  constructor(private modalController: ModalController, private route: ActivatedRoute, private router: Router) { 

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.writingSystem = this.router.getCurrentNavigation().extras.state.writing;
        console.log("writingSystem: " + this.router.getCurrentNavigation().extras.state.writing);
      }
    });

  }

  async settingsPopup(){
    this.nav_fx_sound.play();
    const modal = await this.modalController.create({
      component: SettingsPage,
      cssClass: 'modalCss'
    });
  
    return await modal.present();
  }

  nav_fx_sound: HTMLAudioElement = new Audio();
  pronunciation: HTMLAudioElement = new Audio();

  async ngOnInit() {
    this.nav_fx_sound.src = "../../assets/sounds/button_click_perc_sound_soft.wav";
    this.nav_fx_sound.load();

    await fetch('./../assets/data/kana.json').then(res => res.json()).then(json => {
      this.results = json;
      });
      this.results = this.results.filter(kana => (kana.type == "character" && kana.family == this.writingSystem.toLowerCase()));
      console.log("all data retrieved, writing system : " + this.writingSystem);
      console.log(this.results);
  }

  playPronunciation(link: string){
    console.log("click");

    this.pronunciation.src = link;
    this.pronunciation.load();
    this.pronunciation.play();
  }

}
