import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { StatsService } from '../service/stats.service';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.page.html',
  styleUrls: ['./confirmation-popup.page.scss'],
})
export class ConfirmationPopupPage implements OnInit {

  constructor(private modalController: ModalController, private router: Router, private statsService: StatsService) { }

  nav_sfx: HTMLAudioElement = new Audio();

  ngOnInit() {
    this.nav_sfx.src = "../../assets/sounds/button_click_perc_sound_soft.wav";
    this.nav_sfx.load();
  }

  async closeModal(){
    if(await this.statsService.checkSoundState()){
      this.nav_sfx.play();
    }
    const onClosedData: string =  "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  async goHome(){
    if(await this.statsService.checkSoundState()){
      this.nav_sfx.play();
    }
    this.router.navigateByUrl('home');
    this.closeModal();
  }

}
