import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
// import Hammer from '../../assets/js/hammer.js';
// var hammerjs = require("@types/hammerjs");




@Component({
  selector: 'app-learning-home',
  templateUrl: './learning-home.page.html',
  styleUrls: ['./learning-home.page.scss'],
})
export class LearningHomePage implements OnInit {

  constructor(private router: Router) { }

  goToLearningHiraganaTable(){
    this.router.navigateByUrl('tabs/learningtab/learning-hiragana-table');
  }

  goToLearningHiraganaMnemonic(){
    this.router.navigateByUrl('tabs/learningtab/learning-hiragana-mnemonic');
  }

  goToLearningKatakanaMnemonic(){
    this.router.navigateByUrl('tabs/learningtab/learning-katakana-mnemonic');
  }

//   buttonLogo: HTMLElement = document.getElementById('logo');
//   hammer = new Hammer(this.buttonLogo);

//   hammer.on("panleft panright tap press", function(ev) {
//     myElement.textContent = ev.type +" gesture detected.";
// });

  // buttonLogo = document.getElementById('logo');
  // hammerjs = new Hammer.Manager(this.buttonLogo);
  // tripleTap = new Hammer.Tap({
  //   event: 'tripletap',
  //   taps: 3
  // });
  // hammerjs.on

  doSomething(){
    console.log('double tap !');
    alert('double tap !');
  };

  doSomething2(){
    console.log('press');
    alert('triple tap !');
  }

  async doSomething3(){
    await console.log('other double tap');
  }

  ngOnInit() {
  }

}
