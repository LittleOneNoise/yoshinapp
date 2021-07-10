import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { InfoKanaPage } from '../info-kana/info-kana.page';

@Component({
  selector: 'app-learning-katakana-table1',
  templateUrl: './learning-katakana-table1.page.html',
  styleUrls: ['./learning-katakana-table1.page.scss'],
})
export class LearningKatakanaTable1Page implements OnInit {

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: InfoKanaPage,
      cssClass: 'popoverCss',
      event: ev,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  
  async presentPopoverParam(ev: any, id: number, title: string) {
    const popover = await this.popoverController.create({
      component: InfoKanaPage,
      componentProps: {
        "paramID": id,
        "paramTitle": title
      },
      cssClass: 'popoverCss',
      event: ev,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
