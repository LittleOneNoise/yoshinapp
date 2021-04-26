import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-home',
  templateUrl: './learning-home.page.html',
  styleUrls: ['./learning-home.page.scss'],
})
export class LearningHomePage implements OnInit {

  constructor(private router: Router) { }

  goToLearningHiragana(){
    this.router.navigateByUrl('tabs/learningtab/learning-hiragana');
  }

  ngOnInit() {
  }

}
