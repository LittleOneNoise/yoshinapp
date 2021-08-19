import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { StatsService } from '../service/stats.service';
import { SettingsPage } from '../settings/settings.page';

@Component({
  selector: 'app-learning-mnemonic',
  templateUrl: './learning-mnemonic.page.html',
  styleUrls: ['./learning-mnemonic.page.scss'],
})
export class LearningMnemonicPage implements OnInit {
  
  writingSystem: string = "";
  results: any;
  normal_view: boolean;
  @ViewChild('slidesMnemo') slides: IonSlides;

  constructor(private modalController: ModalController, private route: ActivatedRoute, private router: Router, private statsService: StatsService) { 

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.writingSystem = this.router.getCurrentNavigation().extras.state.writing;
        console.log("writingSystem: " + this.router.getCurrentNavigation().extras.state.writing);
      }
    });

  }

  async settingsPopup(){
    if(await this.statsService.checkSoundState()){
      this.nav_fx_sound.play();
    }
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
    this.normal_view = true;

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

  async goToMap(){
    if(await this.statsService.checkSoundState()){
      this.nav_fx_sound.play();
    }
    this.normal_view = false;
  }

  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  async goToSlide(id: number){
    this.normal_view = true;
    await this.delay(100);
    this.slides.slideTo(id-1, 200);
  }

}
