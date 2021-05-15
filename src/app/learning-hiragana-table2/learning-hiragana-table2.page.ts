import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-hiragana-table2',
  templateUrl: './learning-hiragana-table2.page.html',
  styleUrls: ['./learning-hiragana-table2.page.scss'],
})
export class LearningHiraganaTable2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showInfo: boolean = true;
  showInfo2: boolean = false;

  toggleDisplayDiv(){
    this.showInfo = !this.showInfo;
    this.showInfo2 = !this.showInfo2;
  }

}
