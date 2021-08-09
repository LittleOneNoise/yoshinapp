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
  characterHiraganaMistakesAmount: number;
  characterHiraganaMistakesPercent: number;
  wordHiraganaMistakesAmount: number;
  wordHiraganaMistakesPercent: number;
  characterKatakanaMistakesAmount: number;
  characterKatakanaMistakesPercent: number;
  wordKatakanaMistakesAmount: number;
  wordKatakanaMistakesPercent: number;
  isCharacterHiraganaMistakesTable: boolean;
  isWordHiraganaMistakesTable: boolean;
  isCharacterKatakanaMistakesTable: boolean;
  isWordKatakanaMistakesTable: boolean;
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
    
      this.isCharacterHiraganaMistakesTable = false;
    this.characterHiraganaMistakesTable = null;
    this.isWordHiraganaMistakesTable = false;
    this.wordHiraganaMistakesTable = null;
    this.isCharacterKatakanaMistakesTable = false;
    this.characterKatakanaMistakesTable = null;
    this.isWordKatakanaMistakesTable = false;
    this.wordKatakanaMistakesTable = null;

    await this.statsService.set("testSetionViewWillEnter", "blabla");
    console.log("testSet initialized from the ionViewWillEnter");
    console.log(await this.statsService.get("testSetionViewWillEnter"));

    console.log(await this.statsService.keyExistence("testsAmount"));

    

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



    if(await this.statsService.keyExistence("characterHiraganaMistakes")){
      this.isCharacterHiraganaMistakesTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayMistakeValue("characterHiraganaMistakes");
      this.characterHiraganaMistakesTable = tempTable[0];
      this.characterHiraganaMistakesAmount = tempTable[1];

      //Calculating the width of the hiragana character mistake bar
      let widthBarCharacterHiraganaMistake = this.characterHiraganaMistakesAmount/this.question_amount;
      this.characterHiraganaMistakesPercent = widthBarCharacterHiraganaMistake*100;
      let chart_bar_mistake_hiragana_charac = document.getElementsByClassName('chart_bar_mistake_hiragana_charac') as HTMLCollectionOf<HTMLElement>;
      console.log(chart_bar_mistake_hiragana_charac);
      console.log("setting hira charac mistake bar width to : " + this.characterHiraganaMistakesPercent + "%");
      chart_bar_mistake_hiragana_charac[0].style.width = this.characterHiraganaMistakesPercent + "%";
  }

    if(await this.statsService.keyExistence("wordHiraganaMistakes")){
      this.isWordHiraganaMistakesTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayMistakeValue("wordHiraganaMistakes");
      console.log(tempTable);
      this.wordHiraganaMistakesTable = tempTable[0];
      console.log(tempTable[0]);
      this.wordHiraganaMistakesAmount = tempTable[1];
      console.log(tempTable[1]);

      //Calculating the width of the hiragana word mistake bar
      let widthBarWordHiraganaMistake = this.wordHiraganaMistakesAmount/this.question_amount;
      this.wordHiraganaMistakesPercent = widthBarWordHiraganaMistake*100;
      let chart_bar_mistake_hiragana_word = document.getElementsByClassName('chart_bar_mistake_hiragana_word') as HTMLCollectionOf<HTMLElement>;
      console.log(chart_bar_mistake_hiragana_word);
      console.log("setting hira charac mistake bar width to : " + this.characterHiraganaMistakesPercent + "%");
      chart_bar_mistake_hiragana_word[0].style.width = this.wordHiraganaMistakesPercent + "%";
  }

    if(await this.statsService.keyExistence("characterKatakanaMistakes")){
      this.isCharacterKatakanaMistakesTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayMistakeValue("characterKatakanaMistakes");
      this.characterKatakanaMistakesTable = tempTable[0];
      this.characterKatakanaMistakesAmount = tempTable[1];

      //Calculating the width of the katakana character mistake bar
      let widthBarCharacterKatakanaMistake = this.characterKatakanaMistakesAmount/this.question_amount;
      this.characterKatakanaMistakesPercent = widthBarCharacterKatakanaMistake*100;
      let chart_bar_mistake_katakana_charac = document.getElementsByClassName('chart_bar_mistake_katakana_charac') as HTMLCollectionOf<HTMLElement>;
      console.log(chart_bar_mistake_katakana_charac);
      console.log("setting Kata charac mistake bar width to : " + this.characterKatakanaMistakesPercent + "%");
      chart_bar_mistake_katakana_charac[0].style.width = this.characterKatakanaMistakesPercent + "%";
  }

    if(await this.statsService.keyExistence("wordKatakanaMistakes")){
      this.isWordKatakanaMistakesTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayMistakeValue("wordKatakanaMistakes");
      this.wordKatakanaMistakesTable = tempTable[0];
      this.wordKatakanaMistakesAmount = tempTable[1];

      //Calculating the width of the katakana word mistake bar
      let widthBarWordKatakanaMistake = this.wordKatakanaMistakesAmount/this.question_amount;
      this.wordKatakanaMistakesPercent = widthBarWordKatakanaMistake*100;
      let chart_bar_mistake_katakana_word = document.getElementsByClassName('chart_bar_mistake_katakana_word') as HTMLCollectionOf<HTMLElement>;
      console.log(chart_bar_mistake_katakana_word);
      console.log("setting Kata word mistake bar width to : " + this.wordKatakanaMistakesPercent + "%");
      chart_bar_mistake_katakana_word[0].style.width = this.wordKatakanaMistakesPercent + "%";
  }
    
  
  
    }

}
