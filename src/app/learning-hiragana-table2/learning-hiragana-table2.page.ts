import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-learning-hiragana-table2',
  templateUrl: './learning-hiragana-table2.page.html',
  styleUrls: ['./learning-hiragana-table2.page.scss'],
})
export class LearningHiraganaTable2Page implements OnInit {

  @ViewChild('slidesInfo') slides: IonSlides;

  constructor() { }

  ngOnInit() {
  }

  showInfo: boolean = true;
  showInfo2: boolean = false;

  toggleDisplayDiv(){
    this.showInfo = !this.showInfo;
    this.showInfo2 = !this.showInfo2;
  }

  goToPrev() {
    this.slides.slidePrev();
  }

  goToNext() {
    this.slides.slideNext();
  }

  slideOpts = {
    allowTouchMove: false,
    loop: true
  }


}
