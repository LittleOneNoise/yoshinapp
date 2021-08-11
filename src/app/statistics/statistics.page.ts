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
  characterHiraganaElementTable: string;
  wordHiraganaElementTable: string;
  characterKatakanaElementTable: string;
  wordKatakanaElementTable: string;
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
    this.characterHiraganaElementTable = null;
    this.isWordHiraganaTestDiaryTable = false;
    this.wordHiraganaElementTable = null;
    this.isCharacterKatakanaTestDiaryTable = false;
    this.characterKatakanaElementTable = null;
    this.isWordKatakanaTestDiaryTable = false;
    this.wordKatakanaElementTable = null;

    

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
      this.characterHiraganaElementTable = tempTable[0];
      this.characterHiraganaRatioAmount = parseInt((tempTable[1]*100).toFixed(1));

      //Calculating the width of the hiragana character ratio bar
      let chart_bar_ratio_hiragana_charac = document.getElementsByClassName('chart_bar_ratio_hiragana_charac') as HTMLCollectionOf<HTMLElement>;
      console.log(chart_bar_ratio_hiragana_charac);
      console.log("setting hira charac ratio bar width to : " + this.characterHiraganaRatioAmount + "%");
      chart_bar_ratio_hiragana_charac[0].style.width = this.characterHiraganaRatioAmount + "%";

      //Calculating the size of the hiragana word
    this.updateFontSize(this.wordHiraganaElementTable, 'p1');
  }

  if(await this.statsService.failPresence("wordHiraganaTestDiary")){
    this.isWordHiraganaTestDiaryTable = true;
    this.shameIsOn = true;
    let tempTable = await this.statsService.getArrayTestDiaryValue("wordHiraganaTestDiary");
    this.wordHiraganaElementTable = await tempTable[0];
    this.wordHiraganaRatioAmount = parseInt((tempTable[1]*100).toFixed(1));

    //Calculating the width of the hiragana word ratio bar
    let chart_bar_ratio_hiragana_word = document.getElementsByClassName('chart_bar_ratio_hiragana_word') as HTMLCollectionOf<HTMLElement>;
    console.log(chart_bar_ratio_hiragana_word);
    console.log("setting hira word ratio bar width to : " + this.wordHiraganaRatioAmount + "%");
    chart_bar_ratio_hiragana_word[0].style.width = this.wordHiraganaRatioAmount + "%";

    //Calculating the size of the hiragana word
    this.updateFontSize(this.wordHiraganaElementTable, 'p2');
    
}

if(await this.statsService.failPresence("characterKatakanaTestDiary")){
  this.isCharacterKatakanaTestDiaryTable = true;
  this.shameIsOn = true;
  let tempTable = await this.statsService.getArrayTestDiaryValue("characterKatakanaTestDiary");
  this.characterKatakanaElementTable = tempTable[0];
  this.characterKatakanaRatioAmount = parseInt((tempTable[1]*100).toFixed(1));

  //Calculating the width of the katakana character ratio bar
  let chart_bar_ratio_katakana_charac = document.getElementsByClassName('chart_bar_ratio_katakana_charac') as HTMLCollectionOf<HTMLElement>;
  console.log(chart_bar_ratio_katakana_charac);
  console.log("setting hira charac ratio bar width to : " + this.characterKatakanaRatioAmount + "%");
  chart_bar_ratio_katakana_charac[0].style.width = this.characterKatakanaRatioAmount + "%";

  //Calculating the size of the hiragana word
  this.updateFontSize(this.wordHiraganaElementTable, 'p3');
}

if(await this.statsService.failPresence("wordKatakanaTestDiary")){
  this.isWordKatakanaTestDiaryTable = true;
  this.shameIsOn = true;
  let tempTable = await this.statsService.getArrayTestDiaryValue("wordKatakanaTestDiary");
  this.wordKatakanaElementTable = tempTable[0];
  this.wordKatakanaRatioAmount = parseInt((tempTable[1]*100).toFixed(1));

  //Calculating the width of the katakana character ratio bar
  let chart_bar_ratio_katakana_word = document.getElementsByClassName('chart_bar_ratio_katakana_word') as HTMLCollectionOf<HTMLElement>;
  console.log(chart_bar_ratio_katakana_word);
  console.log("setting katakana word ratio bar width to : " + this.wordKatakanaRatioAmount + "%");
  chart_bar_ratio_katakana_word[0].style.width = this.wordKatakanaRatioAmount + "%";

  //Calculating the size of the hiragana word
  this.updateFontSize(this.wordHiraganaElementTable, 'p4');
}
      
  
    
    
  
  
    }

    async updateFontSize(input_element: string, id_name: string){
      let element_block = document.getElementById(id_name);
      console.log("element_block : ");
      console.log(element_block);
      let amountLetters = input_element.length;
      console.log('number of letters : ' + amountLetters);
        if(amountLetters > 3){
          element_block.style.fontSize = (0.1643*amountLetters**2 - 2.814*amountLetters + 16.566) + "vw";
          console.log('font size set to : ' + (0.1643*amountLetters**2 - 2.814*amountLetters + 16.566) + " vw");
        }
    }

}
