import { PracticeHomePage } from './../practice-home/practice-home.page';
import { LearningHomePage } from './../learning-home/learning-home.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.page.html',
  styleUrls: ['./home-tabs.page.scss'],
})
export class HomeTabsPage implements OnInit {

  tab1: any = PracticeHomePage;
  tab2: any = null;
  
  @ViewChild('myTabs') tabRef: IonTabs;

  constructor(public alertCtrl: AlertController){} 

 
  SwitchTab1(){
    if (this.tab1 == null)
      this.Confirm('Are Sure For Switch To Tab 1 ?',() => {
        this.tab1 = PracticeHomePage;
        this.tab2 = null;
        // setTimeout(() => this.tabRef.select(0));
      })
  }
  
  SwitchTab2(){
    if (this.tab2 == null)
      this.Confirm('Are Sure For Switch To Tab 2 ?',() => {
        this.tab2 = LearningHomePage;
        this.tab1 = null;
        // setTimeout(() => this.tabRef.select(1));
      })
  }
  
  async Confirm(Message, Action){
    (await this.alertCtrl.create({
      header: Message,
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Sure',
          handler: Action
        }
      ]
    })).present();
  }
  

  ngOnInit() {
  }

}
