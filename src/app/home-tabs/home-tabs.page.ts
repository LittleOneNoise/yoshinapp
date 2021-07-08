import { PracticeHomePage } from './../practice-home/practice-home.page';
import { LearningHomePage } from './../learning-home/learning-home.page';
import { StatisticsPage } from '../statistics/statistics.page';
import { Component, OnInit} from '@angular/core';
import { App } from '@capacitor/core';
import { Platform, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.page.html',
  styleUrls: ['./home-tabs.page.scss'],
})
export class HomeTabsPage implements OnInit {

  practice = PracticeHomePage;
  learning = LearningHomePage;
  stats = StatisticsPage;

  constructor( private platform: Platform, private routerOutlet: IonRouterOutlet) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.exitApp();
      }
    });
  }

 
  

  ngOnInit() {
  }

}
