import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice-home',
  templateUrl: './practice-home.page.html',
  styleUrls: ['./practice-home.page.scss'],
})
export class PracticeHomePage implements OnInit {

  constructor(private router: Router) {}

  goToLearningHiragana(){
    this.router.navigateByUrl('/hometest');
  }

  ngOnInit() {
  }

}
