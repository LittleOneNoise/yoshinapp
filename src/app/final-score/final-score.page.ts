import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-final-score',
  templateUrl: './final-score.page.html',
  styleUrls: ['./final-score.page.scss'],
})
export class FinalScorePage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.score = this.router.getCurrentNavigation().extras.state.score;
        this.writing = this.router.getCurrentNavigation().extras.state.writingSystem;
        this.amount = this.router.getCurrentNavigation().extras.state.amt;
      }
    });
   
  }

  score: number;
  writing: string;
  amount: number;

  ngOnInit() {
  }

  goToQuizz(amount: number, writing: string){
    let navigationExtras: NavigationExtras = {
      state: {
        amountUrl: amount,
        writingSystem: writing,
      }
    };
    this.router.navigate(['tabs/practicetab/practice-amount/quizzalpha'], navigationExtras);
  }

  goHome(){
  this.router.navigateByUrl("tabs/practicetab");
  }

}
