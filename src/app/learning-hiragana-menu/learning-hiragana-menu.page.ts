import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-hiragana-menu',
  templateUrl: './learning-hiragana-menu.page.html',
  styleUrls: ['./learning-hiragana-menu.page.scss'],
})
export class LearningHiraganaMenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHiraTable(){
    this.router.navigateByUrl('tabs/learningtab/learning-hiragana-table');
  }

  goToHiraMnemo(){
    this.router.navigateByUrl('tabs/learningtab/learning-hiragana-mnemonic');
  }

}
