import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-practice-home',
  templateUrl: './practice-home.page.html',
  styleUrls: ['./practice-home.page.scss'],
})
export class PracticeHomePage implements OnInit {

  constructor(private router: Router, public alertController: AlertController) {
}

async settingsPopup() {
  const alert = await this.alertController.create({
    cssClass: 'settingsStyle',
    header: 'Settings',
    message: '<div><p>Sound</p></div>This is an alert message.',
    // buttons: ['OK']
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
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
