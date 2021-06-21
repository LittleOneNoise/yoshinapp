import { PracticeHomePage } from './../practice-home/practice-home.page';
import { LearningHomePage } from './../learning-home/learning-home.page';
import { StatisticsPage } from '../statistics/statistics.page';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.page.html',
  styleUrls: ['./home-tabs.page.scss'],
})
export class HomeTabsPage implements OnInit {

  practice = PracticeHomePage;
  learning = LearningHomePage;
  stats = StatisticsPage;

  constructor(){} 

 
  

  ngOnInit() {
  }

}
