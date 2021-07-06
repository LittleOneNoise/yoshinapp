import { StatsService } from './../service/stats.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Kana } from '../service/Kana';
import { ToastController } from '@ionic/angular';
import { Input } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  @Input('isFlipped') flipCard: boolean;

  flipTheFuck(){
    document.getElementById('flip-block').classList.toggle('flip');
  }

  flipTheFuck2(){
    console.log('clicked on flipthefuck2');
    document.getElementById('block_charac').classList.toggle('flip');
    console.log("Rotate value matrix: ");
    var matrix_angle = getComputedStyle(document.querySelector('.flipper')).transform;
    console.log(matrix_angle);
    //-------
    var values = matrix_angle.split('(')[1];
    console.log(values);
    var values2 = values.split(')')[0];
    console.log(values2);
    var values3 = values.split(',');
    console.log(values3);
    console.log(values3[0]);
    console.log(values3[1]);

        var a = values3[0];
        var b = values3[1];
        var c = values3[2];
        var d = values3[3];

        var e = a as any;
        var f = b as any;
        var scale = Math.sqrt(e*e + f*f);
        // var sin = f/scale;
        var angle = Math.round(Math.atan2(f, e) * (180/Math.PI));
        console.log("Rotate value degree: ")
        console.log(angle);

        //----------

    document.querySelector('.flipper').setAttribute('transform', 'rotateY('+angle+180+')');
      
  }

  constructor(private route: ActivatedRoute, private router: Router, public statsService: StatsService, public toastController: ToastController) {
   
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.quizzType = this.router.getCurrentNavigation().extras.state.type;
        console.log("quizzType: " + this.router.getCurrentNavigation().extras.state.type);
        this.writingSystem = this.router.getCurrentNavigation().extras.state.writing;
        console.log("writingSystem: " + this.router.getCurrentNavigation().extras.state.writing);
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
    if(this.quizzType == null || this.writingSystem == null){
      // alert('Error, couldn\'t get quizz data');
    }
    else if(this.writingSystem == "hiragana" && this.quizzType == "character"){
      await fetch('./../assets/data/kana.json').then(res => res.json()).then(json => {
      this.results = json;
      });
      this.results = this.results.filter(kana => (kana.type == "phonetic" && kana.family == "hiragana"));
      this.shuffleList(this.results);
      console.log("j'ai chopé la liste d'hiragana");
  
    }
    else if(this.writingSystem == "hiragana" && this.quizzType == "word"){
      await fetch('./../assets/data/kana.json').then(res => res.json()).then(json => {
      this.results = json;
      console.log(this.results);
      });
      this.results = this.results.filter(kana => (kana.type == "word" && kana.family == "hiragana"));
      console.log(this.results);
      this.shuffleList(this.results);
      console.log(this.results);
  
    }
    else if(this.writingSystem == "katakana" && this.quizzType == "character"){
      await fetch('./../assets/data/kana.json').then(res => res.json()).then(json => {
      this.results = json;
      console.log(this.results);
      });
      this.results = this.results.filter(kana => (kana.type == "phonetic" && kana.family == "katakana"));
      console.log(this.results);
      this.shuffleList(this.results);
      console.log(this.results);
  
    }
    else if(this.writingSystem == "katakana" && this.quizzType == "word"){
      await fetch('./../assets/data/kana.json').then(res => res.json()).then(json => {
      this.results = json;
      console.log(this.results);
      });
      this.results = this.results.filter(kana => (kana.type == "word" && kana.family == "katakana"));
      console.log(this.results);
      this.shuffleList(this.results);
      console.log(this.results);
      console.log("listes des mots katakana récupérée !");
  
    }
  
    this.progression = 1;
    this.final_score = 0;
    this.input_value = [];
    this.inputShown = true;
    this.mistake = false;
    this.mistakeList = [];
    this.mistakeIndex = -1;
    this.normal_session = true;
    this.retake_session = false;
    this.getCharacter();
}

async ionViewWillEnter(){
}

async emptyFieldToast() {
  const toast = await this.toastController.create({
    message: 'Empty field',
    duration: 1000,
    cssClass:'toast-bg',
    position:'middle'
  });
  toast.present();
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
    this.current_charac = this.results[this.progression-1].character;
    this.updateFontSize();
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

  updateFontSize(){
    let cssPointer = document.getElementsByClassName('content_block_charac') as HTMLCollectionOf<HTMLElement>;
    let amountLetters = this.current_charac.length;
    if (cssPointer.length != 0) {
      if(amountLetters<=2){
        cssPointer[0].style.fontSize = "20vw";
      }
      else{
      cssPointer[0].style.fontSize = 0.119*amountLetters**2-3.381*amountLetters+29.786 + "vw";
      }
}
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

  async goToResult(){
    console.log("value key before entering the if else : " + await this.statsService.get("testsAmount"));

    //Updating the amount of tests in the database
    if(!await this.statsService.keyExistence("testsAmount")){
      console.log("no key 'testsAmount' in db");
      this.statsService.set("testsAmount", 1);
      console.log("key 'testsAmount' created and set to 1");
    }
    else {
      console.log("key 'testsAmount' alr exists");
      let currentTestsAmount = await this.statsService.get("testsAmount");
      console.log("Amount was" + currentTestsAmount);
      this.statsService.set("testsAmount", await currentTestsAmount + 1);
      console.log("db updated");
    }

    //Updating the average of tests in the database
    if(!await this.statsService.keyExistence("testsAverage")){
      console.log("no key 'testsAverage' in db");
      this.statsService.set("testsAverage", this.final_score);
      console.log("key 'testsAverage' created and set to "+this.final_score);
    }
    else {
      console.log("key 'testsAverage' alr exists");
      let currentTestsAverage = await this.statsService.get("testsAverage");
      console.log("Average was" + currentTestsAverage);
      let currentTestsAmount = await this.statsService.get("testsAmount");
      let newAverage = ((currentTestsAmount-1)*currentTestsAverage+this.final_score)/currentTestsAmount;
      this.statsService.set("testsAverage", newAverage);
      console.log("db updated");
    }

    //Updating the wall of shame
    if(this.mistakeList != []){
      if(this.writingSystem == "hiragana"){
        if(this.quizzType == "phonetic"){
          for(let e of this.mistakeList){
            await this.statsService.setArrayMistake("phoneticHiraganaMistakes", e);
          }
        }
        if(this.quizzType == "word"){
          for(let e of this.mistakeList){
            await this.statsService.setArrayMistake("wordHiraganaMistakes", e);
          }
        }
      }
      if(this.writingSystem == "katakana"){
        if(this.quizzType == "phonetic"){
          for(let e of this.mistakeList){
            await this.statsService.setArrayMistake("phoneticKatakanaMistakes", e);
          }
        }
        if(this.quizzType == "word"){
          for(let e of this.mistakeList){
            await this.statsService.setArrayMistake("wordKatakanaMistakes", e);
          }
        }
      }
    }
    
    let navigationExtras: NavigationExtras = {
      state: {
        score: this.final_score,
        type: this.quizzType,
         writingSystem: this.writingSystem,
      }
    };
    this.router.navigate(['tabs/practice/final-result'], navigationExtras);
    
  }

  //When pressing the validate button or the enter key
  async validateInput(){
    if(this.input_value != null && this.input_value != ""){
    console.log("tableau des mistakes");
    console.log(this.mistakeList);
    if(this.progression < this.questions_amount){
      if(this.checkAnswer(this.input_value.toLowerCase())){
        let element_block_charac = document.getElementsByClassName('block_charac') as HTMLCollectionOf<HTMLElement>;
        this.final_score++;
        this.input_value = "";
        element_block_charac[0].style.background = "#638C3A";
        await this.delay(250);
        this.progression++;
        this.getCharacter();
        element_block_charac[0].style.background = "#9C694C";
        console.log("réponse bonne et tu n'as pa encore atteind le bout");
      }
      else {
        this.getCurrentName();
        this.inputShown = false;
        this.mistake = true;
        this.mistakeList.push(this.current_charac);
        console.log("c'est faux !! et tu n'as pas encore atteind le bout");
      }
    }
    else if(this.progression == this.questions_amount){
      if(this.checkAnswer(this.input_value.toLowerCase())){
        this.final_score++;
        this.progression++;
        this.input_value = "";
        console.log("c'est bon et ça sent la fin");
        if(this.mistakeList.length != 0){
          this.normal_session = false;
          this.retake_session = true;
          this.input_value = "";
          this.mistakeIndex++;
          this.getMistake(this.mistakeIndex);
          this.updateMistakeListSize();
          console.log("ton tableau d'erreur n'est pas vide!");
        }
        else {
          console.log("ton tableau d'erreur est vide, bg");
          this.goToResult();
        }
      }
      else {
        this.getCurrentName();
        this.inputShown = false;
        this.mistake = true;
        this.mistakeList.push(this.current_charac);
        console.log("c'est faux et ça sent la fin");
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
          console.log("c'est bon et tu es dans la partie rattrappage");
        }
        else {
          console.log("c'est bon est tu vas quitter la partie rattrappage");
          this.goToResult();
        }
      }
      else {
        this.getCurrentName();
        this.inputShown = false;
        this.mistake = true;
        this.mistakeList.push(this.current_charac);
        console.log("t'es au rattrapage et tu fais encore des fautes!!");
      }
    }
    else {
      console.log("Something wrong happened :(");
    }
  }
  else {
    this.emptyFieldToast();
  }
}


}
