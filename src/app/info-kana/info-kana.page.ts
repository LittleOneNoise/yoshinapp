import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Kana } from '../service/Kana';

@Component({
  selector: 'app-info-kana',
  templateUrl: './info-kana.page.html',
  styleUrls: ['./info-kana.page.scss'],
})
export class InfoKanaPage implements OnInit {

  character: string;
  content: Kana[] = [];
  finalContent: Kana;

  constructor(private navParams: NavParams) { }

  async ngOnInit() {
    console.table(this.navParams);
    this.character = await this.navParams.data.charac;
    await this.getPopOverContent(this.character);
    console.log(this.content);

  }

  

  async getPopOverContent(element: string){
    await fetch('./../assets/data/kana.json').then(res => res.json()).then(json => {
      this.content = json;
      });
      this.content = this.content.filter(kana => (kana.character == element));
      this.finalContent = this.content[0];
  }

}
