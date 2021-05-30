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
  }

  

}
