import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Kana } from '../service/Kana';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
   
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.quizzType = this.router.getCurrentNavigation().extras.state.type;
        this.writingSystem = this.router.getCurrentNavigation().extras.state.writing;
      }
    });


  }

  listKanas: Kana[];
  quizzType: string;
  writingSystem: string;
  results: Kana[];
  current_charac: string;
  charac_id: number;
  current_name: string;
  input_value: any;
  progression: number;
  mistake: boolean = false;
  inputShown: boolean = true;
  final_score: number;
  hiraganaList: Kana[];

   async ngOnInit() {

   
    console.log('ngOnInit...')
    console.log("quizzType : " + this.quizzType)
    console.log("writingSystem : " + this.writingSystem)

    if(this.quizzType == null || this.writingSystem == null){
      alert('Error, couldn\'t get quizz data');
    }
    else if(this.writingSystem == "hiragana" && this.quizzType == "phonetic"){
      await fetch('./../assets/data/kana.json').then(res => res.json()).then(json => {
      this.results = json;
      });
      console.log("filtered list : ");
      console.log(this.results);
      this.results = this.results.filter(kana => (kana.type == "phonetic"));
      console.log("filtered list : ");
      console.log(this.results);
      console.log("shuffled list : ");
      this.shuffleList(this.results);
      console.log(this.results);

    }

    this.progression = 1;
    this.final_score = 0;
    this.inputShown = true;
    this.mistake = false;
    this.getCharacter();

}

  shuffleList(array: any):Kana[]{
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // getRandomInt(min, max): number {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is exclusive and the minimum is inclusive
  // };

  getCharacter() {
    this.current_charac = this.results[this.progression].character;
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
          writingSystem: this.writingSystem,
        }
      };
      this.router.navigate(['tabs/practicetab/final-result'], navigationExtras);
    
  }

  validateInput(){
    console.log("validé");
    if(this.checkAnswer(this.input_value.toLowerCase())){
      console.log("correct");
      this.input_value = "";
      this.final_score++;
      this.progression++;
      this.getCharacter();

      if(this.progression > 20){
        this.goToResult();
      }
    }
    else {
      console.log("incorrect");
      this.getCurrentName();
      this.inputShown = false;
      this.mistake = true;

      if(this.progression > 20){
        this.goToResult();
      }
    }
    
  }

}
