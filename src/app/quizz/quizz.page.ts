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
  mistakeList: string[];
  mistakeIndex: number = -1;
  mistakeIndexHtml: number;
  normal_session: boolean = true;
  retake_session: boolean = false;
  readonly questions_amount = 5;
  mistakeListSize: number;

   async ngOnInit() {

   
    console.log('ngOnInit...')
    console.log("quizzType : " + this.quizzType)
    console.log("writingSystem : " + this.writingSystem)

    if(this.quizzType == null || this.writingSystem == null){
      // alert('Error, couldn\'t get quizz data');
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
    this.mistakeList = [];
    // this.inputShown = false;
    // this.mistake = true;
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

  getMistake(index: number) {
    this.current_charac = this.mistakeList[index];
  }

  getCurrentName() {
    this.current_name = this.results.find(a => a.character === this.current_charac).name;
  }

  checkAnswer(answer: string): boolean {
    return answer == this.results.find(a => a.character === this.current_charac).name;
  }

  updateMistakeListSize(){
    this.mistakeListSize = this.mistakeList.length;
    this.mistakeIndexHtml = this.mistakeIndex+1;
  }

  goNext(){
      
      this.mistake = false;
      this.inputShown = true;
      this.input_value = "";
      if(this.progression < this.questions_amount){
        this.progression++;
        this.getCharacter();
      }
      else if(this.progression == this.questions_amount){
        if(this.mistakeList.length != 0){
          this.normal_session = false;
          this.retake_session = true;
          this.progression++;
          this.mistakeIndex++;
          this.getMistake(this.mistakeIndex);
          this.updateMistakeListSize();
        }
        else {
        this.goToResult();
        }
      }
      else if(this.progression > this.questions_amount){
          this.mistakeIndex++;
          this.getMistake(this.mistakeIndex);
          this.updateMistakeListSize();
      }
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

  //When pressing the validate button or the enter key
  validateInput(){
    if(this.progression < this.questions_amount){
      if(this.checkAnswer(this.input_value.toLowerCase())){
        this.final_score++;
        this.input_value = "";
        this.progression++;
        this.getCharacter();
      }
      else {
        this.getCurrentName();
        this.inputShown = false;
        this.mistake = true;
        this.mistakeList.push(this.current_charac);
      }
    }
    else if(this.progression == this.questions_amount){
      if(this.checkAnswer(this.input_value.toLowerCase())){
        this.final_score++;
        this.progression++;
        this.input_value = "";
        if(this.mistakeList.length != 0){
          this.normal_session = false;
          this.retake_session = true;
          this.input_value = "";
          this.mistakeIndex++;
          this.getMistake(this.mistakeIndex);
          this.updateMistakeListSize();
        }
        else {
        this.goToResult();
        }
      }
      else {
        this.getCurrentName();
        this.inputShown = false;
        this.mistake = true;
        this.mistakeList.push(this.current_charac);
      }
    }
    else if(this.progression > this.questions_amount){
      if(this.checkAnswer(this.input_value.toLowerCase())){
        if(this.mistakeIndex < this.mistakeList.length-1){
          this.input_value = "";
          this.normal_session = false;
          this.retake_session = true;
          this.mistakeIndex++;
          this.getMistake(this.mistakeIndex);
          this.updateMistakeListSize();
        }
        else {
        this.goToResult();
        }
      }
      else {
        this.getCurrentName();
        this.inputShown = false;
        this.mistake = true;
        this.mistakeList.push(this.current_charac);
      }
    }
    else {
      console.log("Something wrong happened :(");
    }
  }

}
