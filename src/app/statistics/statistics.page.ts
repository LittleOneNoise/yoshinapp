import { StatsService } from './../service/stats.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  testsAmount: any = 0;
  testsAverage: any ="-";
  testsInitialized: boolean = false;
  phoneticHiraganaMistakesTable: string;
  wordHiraganaMistakesTable: string;
  phoneticKatakanaMistakesTable: string;
  wordKatakanaMistakesTable: string;
  phoneticHiraganaMistakesAmount: number;
  wordHiraganaMistakesAmount: number;
  phoneticKatakanaMistakesAmount: number;
  wordKatakanaMistakesAmount: number;
  isPhoneticHiraganaMistakesTable: boolean;
  isWordHiraganaMistakesTable: boolean;
  isPhoneticKatakanaMistakesTable: boolean;
  isWordKatakanaMistakesTable: boolean;
  shameIsOn: boolean;

  constructor(public statsService: StatsService, public alertController: AlertController) {}

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
            this.ionViewWillEnter();
          }
        }
      ]
    });

    await alert.present();
  }

  removeAll(){
    this.statsService.clearAll();
  }

  async ngOnInit() {
      // await this.statsService.set("testSetngOnInit", "blabla");
      // console.log("testSet initialized from the ngOnInit");
      // console.log(await this.statsService.get("testSetngOnInit"));
      await this.statsService.init();
  }

  async ionViewWillEnter(){
    this.isPhoneticHiraganaMistakesTable = false;
    this.phoneticHiraganaMistakesTable = null;
    this.isWordHiraganaMistakesTable = false;
    this.wordHiraganaMistakesTable = null;
    this.isPhoneticKatakanaMistakesTable = false;
    this.phoneticKatakanaMistakesTable = null;
    this.isWordKatakanaMistakesTable = false;
    this.wordKatakanaMistakesTable = null;

    await this.statsService.set("testSetionViewWillEnter", "blabla");
    console.log("testSet initialized from the ionViewWillEnter");
    console.log(await this.statsService.get("testSetionViewWillEnter"));

    if(await this.statsService.keyExistence("testsAmount")){
      this.testsAmount = await this.statsService.get("testsAmount");
      this.testsInitialized = true;
    }
    else {
      this.testsAmount = 0;
      this.testsInitialized = false;
    }

    if(await this.statsService.keyExistence("testsAverage")){
      this.testsAverage = await this.statsService.get("testsAverage");
      this.testsAverage = this.testsAverage.toFixed(1);

    }
    else {
      this.testsAverage = "-";
    }

    if(await this.statsService.keyExistence("phoneticHiraganaMistakes")){
      this.isPhoneticHiraganaMistakesTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayMistakeValue("phoneticHiraganaMistakes");
      this.phoneticHiraganaMistakesTable = tempTable[0];
      this.phoneticHiraganaMistakesAmount = tempTable[1];
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
  }

    if(await this.statsService.keyExistence("phoneticKatakanaMistakes")){
      this.isPhoneticKatakanaMistakesTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayMistakeValue("phoneticKatakanaMistakes");
      this.phoneticKatakanaMistakesTable = tempTable[0];
      this.phoneticKatakanaMistakesAmount = tempTable[1];
  }

    if(await this.statsService.keyExistence("wordKatakanaMistakes")){
      this.isWordKatakanaMistakesTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayMistakeValue("wordKatakanaMistakes");
      this.wordKatakanaMistakesTable = tempTable[0];
      this.wordKatakanaMistakesAmount = tempTable[1];
  }

  

}

}
