import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-info-kana',
  templateUrl: './info-kana.page.html',
  styleUrls: ['./info-kana.page.scss'],
})
export class InfoKanaPage implements OnInit {

  modalTitle: string;
  modelId: number;

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

}
