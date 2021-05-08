import { LearningHiraganaTable2Page } from './../learning-hiragana-table2/learning-hiragana-table2.page';
import { Component, OnInit } from '@angular/core';
import { LearningHiraganaTable1Page } from '../learning-hiragana-table1/learning-hiragana-table1.page';
import { SuperTabsConfig } from '@ionic-super-tabs/core'

@Component({
  selector: 'app-learning-hiragana-table',
  templateUrl: './learning-hiragana-table.page.html',
  styleUrls: ['./learning-hiragana-table.page.scss'],
})
export class LearningHiraganaTablePage implements OnInit {

  table1 = LearningHiraganaTable1Page;
  table2 = LearningHiraganaTable2Page;

  constructor() { }


  ngOnInit() {
  }
  
  config: SuperTabsConfig = {
    // dragThreshold: 250,
    allowElementScroll: true
    
  }
  

}
