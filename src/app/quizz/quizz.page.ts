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
  mistakeIndex: number = 0;
  normal_session: boolean = true;
  retake_session: boolean = false;

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
    if(this.results!=null){
    this.current_charac = this.results[this.progression].character;
    } else {
      this.router.navigateByUrl('tabs/practicetab');
    }
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

  goNext(){
      
      this.mistake = false;
      this.inputShown = true;
      this.input_value = "";
      this.progression++;
      this.getCharacter();
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

    this.progression++;

    if(this.checkAnswer(this.input_value.toLowerCase())){
      console.log("correct");

      // this.progression++;
      if(this.progression == 6){
        this.final_score++;
      }
      
      if(this.progression <= 5){
        this.input_value = "";
        this.final_score++;
        console.log('final score : '+this.final_score);
        // this.progression++;
        console.log("la progression passe à "+this.progression);
        this.getCharacter();
        console.log("la progression devrait être la même : "+this.progression);
      }

      else if(this.progression > 5 ){
        if(this.mistakeList.length != 0 && this.mistakeIndex < this.mistakeList.length){
          this.getMistake(this.mistakeIndex);
          this.normal_session = false;
          this.retake_session = true;
          console.log("la progression passe à "+this.progression);
          this.mistakeIndex++;
          this.input_value = "";
          console.log('index mistake : '+this.mistakeIndex);
          console.log('taille liste mistake : '+this.mistakeList.length);
        }
        else {
        this.goToResult();
        }
      }
    }
    else {
      console.log("incorrect");
      this.getCurrentName();
      this.inputShown = false;
      this.mistake = true;
      this.mistakeList.push(this.current_charac);

      if(this.progression > 5 ){
        if(this.mistakeList.length != 0 && this.mistakeIndex < this.mistakeList.length){
          this.getMistake(this.mistakeIndex);
          this.normal_session = false;
          this.retake_session = true;
          console.log("la progression passe à "+this.progression);
          this.mistakeIndex++;
          this.input_value = "";
          console.log('index mistake : '+this.mistakeIndex);
          console.log('taille liste mistake : '+this.mistakeList.length);
        } else {
          this.goToResult();
        }
      }
      // this.progression++;
      // this.getCharacter();

    
    }
    
  }

}
