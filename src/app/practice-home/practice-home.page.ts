import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-practice-home',
  templateUrl: './practice-home.page.html',
  styleUrls: ['./practice-home.page.scss'],
})
export class PracticeHomePage implements OnInit {

  constructor(private router: Router) {
}


  goToQuizz(writingSystem: string, quizzType: string){
    let navigationExtras: NavigationExtras = {
      state: {
        type: quizzType,
        writing: writingSystem,
      }
    };
    this.router.navigate(['tabs/practice/quizz'], navigationExtras);
  }

  ngOnInit() {
  }

}
