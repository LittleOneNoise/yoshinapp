import { Component, OnInit } from '@angular/core';
import { LearningHiraganaTable1Page } from '../learning-hiragana-table1/learning-hiragana-table1.page';
import { SuperTabsConfig } from '@ionic-super-tabs/core'

@Component({
  selector: 'app-learning-hiragana-table',
  templateUrl: './learning-hiragana-table.page.html',
  styleUrls: ['./learning-hiragana-table.page.scss'],
})
export class LearningHiraganaTablePage implements OnInit {

  basicPage = LearningHiraganaTable1Page;

  constructor() { }


  ngOnInit() {
  }
  
  config: SuperTabsConfig = {
    // dragThreshold: 250,
    allowElementScroll: true
    
  }
  

}
