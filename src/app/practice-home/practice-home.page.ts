import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';

@Component({
  selector: 'app-practice-home',
  templateUrl: './practice-home.page.html',
  styleUrls: ['./practice-home.page.scss'],
})
export class PracticeHomePage implements OnInit {

  constructor(private router: Router, public alertController: AlertController, public modalController: ModalController) {
}

async settingsPopup(){
  const modal = await this.modalController.create({
    component: SettingsPage,
    cssClass: 'modalCss'
  });

  return await modal.present();
}


  goToQuizz(writingSystem: string, quizzType: string){
    let navigationExtras: NavigationExtras = {
      state: {
        type: quizzType,
        writing: writingSystem,
      }
    };
    this.router.navigate(['quizz'], navigationExtras);
  }

  ngOnInit() {
  }

}
