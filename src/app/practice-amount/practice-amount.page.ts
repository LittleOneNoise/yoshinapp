import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-amount',
  templateUrl: './practice-amount.page.html',
  styleUrls: ['./practice-amount.page.scss'],
})
export class PracticeAmountPage implements OnInit {

  constructor(private router: Router) { }

  goToQuizz(amount: number){
    let navigationExtras: NavigationExtras = {
      state: {
        amountUrl: amount,
      }
    };
    this.router.navigate(['tabs/practicetab/practice-amount/quizzalpha'], navigationExtras);
  }

  ngOnInit() {
  }

}
