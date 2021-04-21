import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  goToLearningHiragana(){
    console.log("Clicked 1rst menu button");
  }

  goToLearning(){
    console.log("Clicked first tab bottom nav");
  }

}
