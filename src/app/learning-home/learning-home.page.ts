import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';



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

  ngOnInit() {
  }

}
