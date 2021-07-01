import { InfoKanaPage } from './../info-kana/info-kana.page';
import { KanaList } from './../service/KanaList';
import { JsonGrabberService } from './../service/json-grabber.service';
import { Component, OnInit } from '@angular/core';
import { Kana } from './../service/Kana';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-learning-hiragana-table1',
  templateUrl: './learning-hiragana-table1.page.html',
  styleUrls: ['./learning-hiragana-table1.page.scss'],
})
export class LearningHiraganaTable1Page implements OnInit {

  constructor(public popoverController: PopoverController) { }


  async ngOnInit() {
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
