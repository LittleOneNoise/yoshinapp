import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-quizzalpha',
  templateUrl: './quizzalpha.page.html',
  styleUrls: ['./quizzalpha.page.scss'],
})
export class QuizzalphaPage implements OnInit {

  amount: number;
  writing: string;

  constructor(private route: ActivatedRoute, private router: Router) {
   
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.amount = this.router.getCurrentNavigation().extras.state.amountUrl;
        this.writing = this.router.getCurrentNavigation().extras.state.writingSystem;
      }
    });


   }

  results: any;
  current_charac: string;
  charac_id: number;
  current_name: string;
  input_value: any;
  progression: number;
  mistake: boolean = false;
  inputShown: boolean = true;
  final_score: number;

  getRandomInt(min, max): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
  };

  getCharacter() {
    this.charac_id = this.getRandomInt(1,5);
    this.current_charac = this.results.find(b => b.id === this.charac_id).character;
  }

  getCurrentName() {
    this.current_name = this.results.find(a => a.character === this.current_charac).name;
  }

  checkAnswer(answer: string): boolean {
    return answer == this.results.find(a => a.character === this.current_charac).name;
  }

  goNext(){
    this.getCharacter();
      this.mistake = false;
      this.inputShown = true;
      this.input_value = "";
      this.progression++;
  }

  goToResult(){
      let navigationExtras: NavigationExtras = {
        state: {
          score: this.final_score,
          writingSystem: this.writing,
        }
      };
      this.router.navigate(['tabs/practicetab/final-result'], navigationExtras);
    
  }

  

  async ngOnInit() {
    
    await fetch('./../assets/data/kana.json').then(res => res.json()).then(json => {
    console.log('results::', json);
    this.results = json;

    })
    this.getCharacter();
    this.progression = 9;
    this.final_score = 0;

}



  validateInput(){
    console.log("validé");
    if(this.checkAnswer(this.input_value.toLowerCase())){
      console.log("correct");
      this.getCharacter();
      this.input_value = "";
      this.final_score++;
      this.progression++;
      if(this.progression > this.amount){
        this.goToResult();
      }
    }
    else {
      console.log("incorrect");
      this.getCurrentName();
      this.inputShown = false;
      this.mistake = true;
      if(this.progression > this.amount){
        this.goToResult();
      }
    }
    
  }

}
