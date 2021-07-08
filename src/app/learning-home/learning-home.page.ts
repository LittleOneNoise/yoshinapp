import { Router } from '@angular/router';
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

  async settingsPopup(){
    const modal = await this.modalController.create({
      component: SettingsPage,
      cssClass: 'modalCss'
    });
  
    return await modal.present();
  }

  goToLearningHiraganaTable(){
    this.router.navigateByUrl('learning-hiragana-table');
  }

  goToLearningHiraganaMnemonic(){
    this.router.navigateByUrl('learning-hiragana-mnemonic');
  }

  goToLearningKatakanaMnemonic(){
    this.router.navigateByUrl('tabs/learning/learning-katakana-mnemonic');
  }

  ngOnInit() {
  }

}
