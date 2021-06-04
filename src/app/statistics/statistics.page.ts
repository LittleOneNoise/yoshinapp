import { StatsService } from './../service/stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  testsAmount: any = 0;
  testsAverage: any ="-";
  testsInitialized: boolean = false;
  phoneticHiraganaMistakesTable: boolean;
  wordHiraganaMistakesTable: boolean;
  phoneticKatakanaMistakesTable: boolean;
  wordKatakanaMistakesTable: boolean;
  phoneticHiraganaMistakesAmount: number;
  wordHiraganaMistakesAmount: number;
  phoneticKatakanaMistakesAmount: number;
  wordKatakanaMistakesAmount: number;
  shameIsOn: boolean;

  constructor(public statsService: StatsService) {}

  addJohn(){
    this.statsService.set("1", "john");
  }

  removeAll(){
    this.statsService.clearAll();
  }

  async getJohn(){
    console.log(await this.statsService.get("1"));
  }

  async ngOnInit() {
      // await this.statsService.set("testSetngOnInit", "blabla");
      // console.log("testSet initialized from the ngOnInit");
      // console.log(await this.statsService.get("testSetngOnInit"));
      await this.statsService.init();
  }

  async ionViewWillEnter(){
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
      this.phoneticHiraganaMistakesTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayMistakeValue("phoneticHiraganaMistakes");
      this.phoneticHiraganaMistakesTable = tempTable[0];
      this.phoneticHiraganaMistakesAmount = tempTable[1];
  }

    if(await this.statsService.keyExistence("wordHiraganaMistakes")){
      this.wordHiraganaMistakesTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayMistakeValue("wordHiraganaMistakes");
      this.wordHiraganaMistakesTable = tempTable[0];
      this.wordHiraganaMistakesAmount = tempTable[1];
  }

    if(await this.statsService.keyExistence("phoneticKatakanaMistakes")){
      this.phoneticKatakanaMistakesTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayMistakeValue("phoneticKatakanaMistakes");
      this.phoneticKatakanaMistakesTable = tempTable[0];
      this.phoneticKatakanaMistakesAmount = tempTable[1];
  }

    if(await this.statsService.keyExistence("wordKatakanaMistakes")){
      this.wordKatakanaMistakesTable = true;
      this.shameIsOn = true;
      let tempTable = await this.statsService.getArrayMistakeValue("wordKatakanaMistakes");
      this.wordKatakanaMistakesTable = tempTable[0];
      this.wordKatakanaMistakesAmount = tempTable[1];
  }

  

}

}
