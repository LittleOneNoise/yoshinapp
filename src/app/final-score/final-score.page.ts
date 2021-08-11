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
   
    console.log("executing the constructor");
    console.log(this.score,this.writing, this.quizzType);
    console.log("summary tab in final score : ");
    console.log(this.summary_table);

  }

  score: number;
  quizzType: string;
  writing: string;
  summary_table: string[] = [];
  isFail: boolean = false;
  isSuccess: boolean = false;
  // tab_ex: string[][] = [["ご","correct"], ["だ","wrong"],["ご","correct"], ["だ","wrong"],["ご","correct"], ["だ","wrong"],["ご","correct"], ["だ","wrong"],["ご","correct"], ["だ","wrong"],["ご","correct"], ["だ","wrong"]];
  tab_ex: string[][] = [];
  fail_tab: string[] = [];
  success_tab: string[] = [];


  async ngOnInit() {

    
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.fail_tab = [];
        this.success_tab = [];
        this.score = this.router.getCurrentNavigation().extras.state.score;
        this.quizzType = this.router.getCurrentNavigation().extras.state.type;
        this.writing = this.router.getCurrentNavigation().extras.state.writingSystem;
        this.summary_table = this.router.getCurrentNavigation().extras.state.sum_up_tab;
        console.log("sum up tab from constructor : ");
        console.log(this.router.getCurrentNavigation().extras.state.sum_up_tab);
        this.sortSummaryTab(this.router.getCurrentNavigation().extras.state.sum_up_tab);
      }
    });

  }

  async sortSummaryTab(tab: string[][]){
    for(let e of tab){
      if(e[1] == "correct"){
        this.isSuccess = true;
        this.success_tab.push(e[0]);
      }
      else if (e[1] == "wrong") {
        this.isFail = true;
        this.fail_tab.push(e[0]);
      }
    }
    console.log("fail_tab : ");
    console.log(this.fail_tab);
    console.log("success_tab : ");
    console.log(this.success_tab);
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
