import { LearningHiraganaTable1Page } from './../learning-hiragana-table1/learning-hiragana-table1.page';
import { LearningHiraganaTable2Page } from './../learning-hiragana-table2/learning-hiragana-table2.page';
import { Component, OnInit } from '@angular/core';
import { SuperTabsConfig } from '@ionic-super-tabs/core'
import { LearningHiraganaTable3Page } from '../learning-hiragana-table3/learning-hiragana-table3.page';
import { LearningHiraganaTable4Page } from '../learning-hiragana-table4/learning-hiragana-table4.page';

@Component({
  selector: 'app-learning-hiragana-table',
  templateUrl: './learning-hiragana-table.page.html',
  styleUrls: ['./learning-hiragana-table.page.scss'],
})
export class LearningHiraganaTablePage implements OnInit {

  table1 = LearningHiraganaTable1Page;
  table2 = LearningHiraganaTable2Page;
  table3 = LearningHiraganaTable3Page;
  table4 = LearningHiraganaTable4Page

  constructor() { }


  ngOnInit() {
  }
  
  config: SuperTabsConfig = {
    allowElementScroll: true,
    // shortSwipeDuration: 180,
	  // dragThreshold: 40,
    
  }
  

}
