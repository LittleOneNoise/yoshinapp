import { KanaList } from './../service/KanaList';
import { JsonGrabberService } from './../service/json-grabber.service';
import { Component, OnInit } from '@angular/core';
import { Kana } from './../service/Kana';

@Component({
  selector: 'app-learning-hiragana-table1',
  templateUrl: './learning-hiragana-table1.page.html',
  styleUrls: ['./learning-hiragana-table1.page.scss'],
})
export class LearningHiraganaTable1Page implements OnInit {

  constructor(public jsonGrabber: JsonGrabberService) { }

  listKanas: Kana[];
  results: any;

  async ngOnInit() {
    try {
      let rep:KanaList = await this.jsonGrabber.getKana();
      this.listKanas = rep.data;
      
    } catch (error) {
      
    }

    fetch('./../assets/data/kana.json').then(res => res.json()).then(json => {
      console.log('results::', json);
      this.results = json;

      for(let e in this.results){
        console.log(e["name"]);
      }
      
    })

    for(let e in this.listKanas){
      console.log(e);
    }

    for(let e in this.results){
      console.log(e);
    }

  }

}
