import { StatsService } from './../service/stats.service';
import { AlertController, ModalController } from '@ionic/angular';
import { SettingsPage } from '../settings/settings.page';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var window;

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  readonly question_amount = 5;
  testsAmount: any = 0;
  testsAverage: any ="-";
  bestScore: number = 0;
  testsInitialized: boolean = false;
  characterHiraganaMistakesTable: string;
  wordHiraganaMistakesTable: string;
  characterKatakanaMistakesTable: string;
  wordKatakanaMistakesTable: string;
  characterHiraganaRatioAmount: number;
  wordHiraganaRatioAmount: number;
  characterKatakanaRatioAmount: number;
  wordKatakanaRatioAmount: number;
  isCharacterHiraganaTestDiaryTable: boolean;
  isWordHiraganaTestDiaryTable: boolean;
  isCharacterKatakanaTestDiaryTable: boolean;
  isWordKatakanaTestDiaryTable: boolean;
  shameIsOn: boolean;

  constructor(public statsService: StatsService, public alertController: AlertController, private modalController: ModalController) {
    window.stats = this;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  async settingsPopup(){
    const modal = await this.modalController.create({
      component: SettingsPage,
      cssClass: 'modalCss'
    });
  
    return await modal.present();
  }

  async clearStatsAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Warning',
      message: 'Are you sure you want to delete all your stats? You won\'t be able to cancel once you do.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel stats deletion');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Deleting stats...');
            this.removeAll();
            this.shameIsOn = false;
            // this.ionViewWillEnter();
            this.ngOnInit();
          }
        }
      ]
    });

    await alert.present();
  }

  removeAll(){
    this.statsService.clearAll();
  }

  imstats(){
    console.log("yo someone called me !");
  }

  async ngOnInit() {
    console.log("initializing stats..");
    await this.statsService.init();
    
      this.isCharacterHiraganaTestDiaryTable = false;
    this.characterHiraganaMistakesTable = null;
    this.isWordHiraganaTestDiaryTable = false;
    this.wordHiraganaMistakesTable = null;
    this.isCharacterKatakanaTestDiaryTable = false;
    this.characterKatakanaMistakesTable = null;
    this.isWordKatakanaTestDiaryTable = false;
    this.wordKatakanaMistakesTable = null;

    

    if(await this.statsService.keyExistence("testsAmount") && await this.statsService.keyExistence("bestScore") && await this.statsService.keyExistence("testsAverage")){
      this.testsInitialized = true;
      console.log("all good in the db, retrieving the data...");
      this.testsAmount = await this.statsService.get("testsAmount");
      this.bestScore = await this.statsService.get("bestScore");
      this.testsAverage = await this.statsService.get("testsAverage");
      this.testsAverage = await this.testsAverage.toFixed(1);
      console.log("testsInitialized = true");

      //Calculating the width of the average score bar
      let widthBarAverageScore = this.testsAverage/this.question_amount;
      let chart_bar_average_score = document.getElementsByClassName('chart_bar_average_score') as HTMLCollectionOf<HTMLElement>;
      console.log(chart_bar_average_score);
      console.log("setting average score bar width to : " + widthBarAverageScore*100 + "%");
      chart_bar_average_score[0].style.width = widthBarAverageScore*100 + "%";

      //Calculating the width of the best score bar
      let widthBarBestScore = this.bestScore/this.question_amount;
      let chart_bar_best_score = document.getElementsByClassName('chart_bar_best_score') as HTMLCollectionOf<HTMLElement>;
      console.log(chart_bar_best_score);
      console.log("setting best score bar width to : " + widthBarBestScore*100 + "%");
      chart_bar_best_score[0].style.width = widthBarBestScore*100 + "%";
      
      

    }
    else {
      console.log("either testAmount, bestScore or testsAvergage is missing");
      this.testsAmount = 0;
      this.bestScore = 0;
      this.testsAverage = "-";
      this.testsInitialized = false;
    }



    if(await this.statsService.failPresence("characterHiraganaTestDiary")){
      this.isCharacterHiraganaTestDiaryTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayTestDiaryValue("characterHiraganaTestDiary");
      this.characterHiraganaMistakesTable = tempTable[0];
      this.characterHiraganaRatioAmount = parseInt((tempTable[1]*100).toFixed(1));

      //Calculating the width of the hiragana character mistake bar
      // let widthBarCharacterHiraganaMistake = this.characterHiraganaRatioAmount;
      // this.characterHiraganaMistakesPercent = widthBarCharacterHiraganaMistake*100;
      let chart_bar_mistake_hiragana_charac = document.getElementsByClassName('chart_bar_mistake_hiragana_charac') as HTMLCollectionOf<HTMLElement>;
      console.log(chart_bar_mistake_hiragana_charac);
      console.log("setting hira charac ratio bar width to : " + this.characterHiraganaRatioAmount + "%");
      chart_bar_mistake_hiragana_charac[0].style.width = this.characterHiraganaRatioAmount + "%";
  }

    

      //Calculating the width of the hiragana word mistake bar
      
  
    
    
  
  
    }

}
