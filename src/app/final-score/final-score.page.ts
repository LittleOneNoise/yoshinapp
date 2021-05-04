import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
      }
    });
   
  }

  score: number;
  writing: string;

  ngOnInit() {
  }

}
