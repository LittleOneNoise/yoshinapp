import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';
import { StatsService } from '../service/stats.service';


@Component({
  selector: 'app-learning-home',
  templateUrl: './learning-home.page.html',
  styleUrls: ['./learning-home.page.scss'],
})
export class LearningHomePage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController, private modalController: ModalController, private statsService: StatsService) { }

  nav_fx_sound: HTMLAudioElement = new Audio();
  soundEnabled: boolean = true;

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

  async goToLearningHiraganaTable(){
    if(await this.statsService.checkSoundState()){
      this.nav_fx_sound.play();
    }
    this.router.navigateByUrl('learning-hiragana-table');
  }

  async goToLearningMnemonic(writingSystem: string){
    let navigationExtras: NavigationExtras = {
      state: {
        writing: writingSystem,
      }
    };
    if(await this.statsService.checkSoundState()){
      this.nav_fx_sound.play();
    }
    this.router.navigate(['learning-mnemonic'], navigationExtras);
  }

  async goToLearningKatakanaTable(){
    if(await this.statsService.checkSoundState()){
      this.nav_fx_sound.play();
    }
    this.router.navigateByUrl('learning-katakana-table');
  }

  ngOnInit() {
    this.nav_fx_sound.src = "../../assets/sounds/SD_Click.mp3";
    this.nav_fx_sound.load();
  }

}
