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

async settingsPopup() {
  const alert = await this.alertController.create({
    cssClass: 'settingsStyle',
    header: 'Settings',
    message: '<div style="display:flex; flex-direction:row; height="100%"; width="100%";><div style="display:flex; flex-direction:column;"><p>Sound</p><img src=\'../assets/icon/sound_on_icon.svg\'/></div><div style="display:flex; flex-direction:column;"><p>Reset data</p><img src=\'../assets/icon/delete_icon.svg\'/></div>',
    // buttons: ['OK']
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}

async settingsPopupv2(){
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
    this.router.navigate(['tabs/practice/quizz'], navigationExtras);
  }

  ngOnInit() {
  }

}
