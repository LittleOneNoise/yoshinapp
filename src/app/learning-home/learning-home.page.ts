import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';


@Component({
  selector: 'app-learning-home',
  templateUrl: './learning-home.page.html',
  styleUrls: ['./learning-home.page.scss'],
})
export class LearningHomePage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController, private modalController: ModalController) { }

  nav_fx_sound: HTMLAudioElement = new Audio();
  soundEnabled: boolean = true;

  async settingsPopup(){
    this.nav_fx_sound.play();
    const modal = await this.modalController.create({
      component: SettingsPage,
      cssClass: 'modalCss'
    });
  
    return await modal.present();
  }

  goToLearningHiraganaTable(){
    this.nav_fx_sound.play();
    this.router.navigateByUrl('learning-hiragana-table');
  }

  goToLearningMnemonic(writingSystem: string){
    let navigationExtras: NavigationExtras = {
      state: {
        writing: writingSystem,
      }
    };
    this.nav_fx_sound.play();
    this.router.navigate(['learning-mnemonic'], navigationExtras);
  }

  goToLearningKatakanaTable(){
    this.nav_fx_sound.play();
    this.router.navigateByUrl('learning-katakana-table');
  }

  ngOnInit() {
    this.nav_fx_sound.src = "../../assets/sounds/button_click_perc_sound_soft.wav";
    this.nav_fx_sound.load();
  }

}
