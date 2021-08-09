import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
declare var window;

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
        this.quizzType = this.router.getCurrentNavigation().extras.state.type;
        this.writing = this.router.getCurrentNavigation().extras.state.writingSystem;
      }
    });
   
  }

  score: number;
  quizzType: string;
  writing: string;

  ngOnInit() {
    console.log(this.score,this.writing, this.quizzType);
    // window.stats.ngOnInit();
  }

  goToQuizz(){
    let navigationExtras: NavigationExtras = {
      state: {
        type: this.quizzType,
        writing: this.writing,
      }
    };
    this.router.navigate(['quizz'], navigationExtras);
  }

  goHome(){
  this.router.navigateByUrl("home");
  }

}
