import { ConfirmationPopupPage } from './../confirmation-popup/confirmation-popup.page';
import { StatsService } from './../service/stats.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Kana } from '../service/Kana';
import { IonInput, Platform, ToastController, ModalController } from '@ionic/angular';
import { Input } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SettingsPage } from '../settings/settings.page';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {

  trigger_correct_animation(){
    document.getElementById('block_charac').className = 'block_charac_correct bounce';
  }

  untrigger_correct_animation(){
    document.getElementById('block_charac').className = 'block_charac';
  }

  add_correct_animation_to_class(){
    document.getElementById("block_charac").classList.add("bounce");
  }

  remove_correct_animation_to_class(){
    document.getElementById("block_charac").classList.remove("bounce");
  }

  async leaveQuizz(){
    console.log("leave quizz request");
    const modal = await this.modalController.create({
      component: ConfirmationPopupPage,
      cssClass: 'modalCss2'
    });
  
    return await modal.present();
  }

  showAnswer() {
    const el = document.querySelector('.show_answer') as HTMLElement;
    // el.style.setProperty('--background', '#4D8F42');
    el.style.setProperty('--background', '#65a53e');
    this.show_answer_btn_content = this.current_name;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  @ViewChild('input')  inputElement: IonInput;

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

  constructor(private route: ActivatedRoute, private router: Router, public statsService: StatsService, public toastController: ToastController, public platform: Platform, private modalController: ModalController) {

    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });
   
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.quizzType = this.router.getCurrentNavigation().extras.state.type;
        console.log("quizzType: " + this.router.getCurrentNavigation().extras.state.type);
        this.writingSystem = this.router.getCurrentNavigation().extras.state.writing;
        console.log("writingSystem: " + this.router.getCurrentNavigation().extras.state.writing);
      }
    });


  }

  async settingsPopup(){
    const modal = await this.modalController.create({
      component: SettingsPage,
      cssClass: 'modalCss'
    });
  
    return await modal.present();
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
  readonly questions_amount = 2;
  mistakeListSize: number;
  correct_answer: boolean = false;
  show_answer_btn_content: string = "Show answer";
  transition_to_retake: boolean = false;
  // transition_to_retake: boolean = true;
  p_bar_value: number;
  summary_table: string[][] = [];

   async ngOnInit() {
    if(this.quizzType == null || this.writingSystem == null){
      // alert('Error, couldn\'t get quizz data');
    }
    else if(this.writingSystem == "hiragana" && this.quizzType == "character"){
      await fetch('./../assets/data/kana.json').then(res => res.json()).then(json => {
      this.results = json;
      });
      this.results = this.results.filter(kana => (kana.type == "character" && kana.family == "hiragana"));
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
      this.results = this.results.filter(kana => (kana.type == "character" && kana.family == "katakana"));
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
    // this.inputShown = false;
    // this.correct_answer = true;
    this.correct_answer = false;
    this.mistake = false;
    // this.mistake = true;
    this.mistakeList = [];
    this.mistakeIndex = -1;
    this.normal_session = true;
    this.retake_session = false;
    this.getCharacter();
    this.p_bar_value = this.progression / this.questions_amount;
    let element_block_charac = document.getElementsByClassName('block_charac') as HTMLCollectionOf<HTMLElement>;
    element_block_charac[0].style.background = "#9C694C";
    // this.delay(100);
    this.inputElement.setFocus();
}

async ionViewWillEnter(){
  this.ngOnInit();
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
    this.updateFontSize();
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
    let element_block_charac = document.getElementsByClassName('block_charac') as HTMLCollectionOf<HTMLElement>;
    let amountLetters = this.current_charac.length;
    console.log('current number of letters : ' + amountLetters);
    if (cssPointer.length != 0) {
      if(amountLetters==1){
        cssPointer[0].style.fontSize = "20vw";
        element_block_charac[0].style.width = "30vw";
        element_block_charac[0].style.height = "30vw";
      }
      else if(amountLetters==2){
        cssPointer[0].style.fontSize = "20vw";
        element_block_charac[0].style.width = "50vw";
        element_block_charac[0].style.height = "30vw";
      }
      else{
      cssPointer[0].style.fontSize = 0.119*amountLetters**2-3.381*amountLetters+29.786 + "vw";
      element_block_charac[0].style.width = 0.3976*amountLetters**3 - 8.2558*amountLetters**2 + 55.635*amountLetters - 31.916 + "vw";
      element_block_charac[0].style.height = -14.6*Math.log(amountLetters) + 45.999 + "vw";
      }
}
  }

  async goNext(){
      let element_block_charac = document.getElementsByClassName('block_charac') as HTMLCollectionOf<HTMLElement>;
      this.show_answer_btn_content = "Show answer";
      this.mistake = false;
      this.inputShown = true;
      this.input_value = "";
      //When question is between 1rst and before the last one
      if(this.progression < this.questions_amount){
        element_block_charac[0].style.background = "#9C694C";
        this.progression++;
        this.getCharacter();
        this.p_bar_value = this.progression / this.questions_amount;
        await this.delay(100);
        this.inputElement.setFocus();
      }
      //When this is the last question
      else if(this.progression == this.questions_amount){
        //When mistake list is NOT empty
        if(this.mistakeList.length != 0){

          this.inputShown = false;
          this.shuffleList(this.mistakeList);
          // this.transition_to_retake = true;
          console.log("let's go retake");
          // await this.delay(2000);
          // this.transition_to_retake = false;
          await this.delay(10);
          element_block_charac[0].style.background = "#C3687E";
          this.inputShown = true;

          this.normal_session = false;
          this.retake_session = true;
          this.progression++;
          this.mistakeIndex++;
          this.getMistake(this.mistakeIndex);
          this.updateMistakeListSize();
          await this.delay(100);
          this.inputElement.setFocus();
        }
        else {
        this.goToResult();
        }
      }
      //When this is the retake session
      else if(this.progression > this.questions_amount){
          element_block_charac[0].style.background = "#C3687E";
          this.mistakeIndex++;
          this.getMistake(this.mistakeIndex);
          this.updateMistakeListSize();
          await this.delay(100);
          this.inputElement.setFocus();
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
      console.log("key 'testsAverage' created and set to "+ this.final_score);
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

    //Updating the best score in the database
    if(!await this.statsService.keyExistence("bestScore")){
      console.log("no key 'bestScore' in db");
      this.statsService.set("bestScore", this.final_score);
      console.log("key 'bestScore' created and set to "+ this.final_score);
    }
    else {
      console.log("key 'bestScore' alr exists");
      let currentBestScore = await this.statsService.get("bestScore");
      console.log("bestScore was" + currentBestScore);
      if(currentBestScore < this.final_score){
        console.log("current best score is lower than the score you just did, updating it...");
        this.statsService.set("bestScore", this.final_score);
      }
      else {
        console.log("current best score is better than what you just did");
      }
    }

    //Updating the wall of shame
    if(this.mistakeList != []){
      console.log("updating the wall of shame...");
      if(this.writingSystem == "hiragana"){
        if(this.quizzType == "character"){
          console.log("hiragana character test detected...");
          for(let e of this.mistakeList){
            console.log("mistake word : ", e);
            await this.statsService.setArrayMistake("characterHiraganaMistakes", e);
          }
        }
        if(this.quizzType == "word"){
          for(let e of this.mistakeList){
            await this.statsService.setArrayMistake("wordHiraganaMistakes", e);
          }
        }
      }
      if(this.writingSystem == "katakana"){
        if(this.quizzType == "character"){
          for(let e of this.mistakeList){
            await this.statsService.setArrayMistake("characterKatakanaMistakes", e);
          }
        }
        if(this.quizzType == "word"){
          for(let e of this.mistakeList){
            await this.statsService.setArrayMistake("wordKatakanaMistakes", e);
          }
        }
      }
    }

    //Updating the test diary
    console.log("updating the test diary...");
    if(this.writingSystem == "hiragana"){
      if(this.quizzType == "character"){
        console.log("hiragana character test detected...");
        for(let e of this.summary_table){
          console.log("element : " + e[0] + " state : ", e[1]);
          await this.statsService.setArrayTestDiary("characterHiraganaTestDiary", e);
        }
      }
      // if(this.quizzType == "word"){
      //   for(let e of this.mistakeList){
      //     await this.statsService.setArrayMistake("wordHiraganaMistakes", e);
      //   }
      // }
    }
    // if(this.writingSystem == "katakana"){
    //   if(this.quizzType == "character"){
    //     for(let e of this.mistakeList){
    //       await this.statsService.setArrayMistake("characterKatakanaMistakes", e);
    //     }
    //   }
    //   if(this.quizzType == "word"){
    //     for(let e of this.mistakeList){
    //       await this.statsService.setArrayMistake("wordKatakanaMistakes", e);
    //     }
    //   }
    // }
  
    
    let navigationExtras: NavigationExtras = {
      state: {
        score: this.final_score,
        type: this.quizzType,
         writingSystem: this.writingSystem,
      }
    };
    this.router.navigate(['final-result'], navigationExtras);
    
  }



  //When pressing the validate button or the enter key
  async validateInput(){
    if(this.input_value != null && this.input_value != ""){
    console.log("tableau des mistakes");
    console.log(this.mistakeList);
    //When the question is between 1rst and before last one
    if(this.progression < this.questions_amount){
      //When answer is right
      if(this.checkAnswer(this.input_value.toLowerCase())){
        // let element_block_charac = document.getElementsByClassName('block_charac') as HTMLCollectionOf<HTMLElement>;
        this.summary_table.push([this.current_charac, "correct"]);
        console.log("added " + this.current_charac + "to the summary table as correct");
        console.log("summary table :");
        console.log(this.summary_table);
        this.final_score++;
        this.input_value = "";
        // element_block_charac[0].style.background = "#65a53e";
        // this.trigger_correct_animation();
        this.add_correct_animation_to_class();
        this.inputShown = false;
        this.correct_answer = true;
        await this.delay(700);
        this.progression++;
        this.getCharacter();
        // element_block_charac[0].style.background = "#9C694C";
        // this.untrigger_correct_animation();
        this.remove_correct_animation_to_class();
        this.correct_answer = false;
        this.inputShown = true;
        this.p_bar_value = this.progression / this.questions_amount;
        await this.delay(100);
        this.inputElement.setFocus();
        console.log("réponse bonne et tu n'as pa encore atteind le bout");
      }
      //When answer is wrong
      else {
        this.summary_table.push([this.current_charac, "wrong"]);
        console.log("added " + this.current_charac + "to the summary table as wrong");
        console.log("summary table :");
        console.log(this.summary_table);
        let element_block_charac = document.getElementsByClassName('block_charac') as HTMLCollectionOf<HTMLElement>;
        element_block_charac[0].style.background = "#a24040";
        this.getCurrentName();
        this.inputShown = false;
        this.mistake = true;
        this.mistakeList.push(this.current_charac);
        console.log("c'est faux !! et tu n'as pas encore atteind le bout");
      }
    }
    //When this is the last question of the quizz
    else if(this.progression == this.questions_amount){
      //When answer is right
      if(this.checkAnswer(this.input_value.toLowerCase())){
        this.summary_table.push([this.current_charac, "correct"]);
        console.log("added " + this.current_charac + "to the summary table as correct");
        console.log("summary table :");
        console.log(this.summary_table);
        let element_block_charac = document.getElementsByClassName('block_charac') as HTMLCollectionOf<HTMLElement>;
        this.final_score++;
        // this.progression++;
        this.input_value = "";
        // element_block_charac[0].style.background = "#65a53e";
        this.add_correct_animation_to_class();
        this.inputShown = false;
        this.correct_answer = true;
        await this.delay(700);
        // element_block_charac[0].style.background = "#9C694C";
        this.remove_correct_animation_to_class();
        this.correct_answer = false;
        this.inputShown = false;
        
        this.progression++;
        console.log("c'est bon et ça sent la fin");
        //When mistake list is not empty
        if(this.mistakeList.length != 0){
          this.shuffleList(this.mistakeList);
          // this.transition_to_retake = true;
        // console.log("let's go retake");
        // await this.delay(2000);
        // this.transition_to_retake = false;
        await this.delay(10);
        element_block_charac[0].style.background = "#C3687E";
        this.inputShown = true;
          
          this.normal_session = false;
          this.retake_session = true;
          this.input_value = "";
          this.mistakeIndex++;
          this.getMistake(this.mistakeIndex);
          this.updateMistakeListSize();
          await this.delay(100);
          this.inputElement.setFocus();
          console.log("ton tableau d'erreur n'est pas vide!");
        }
        //When mistake list is empty
        else {
          console.log("ton tableau d'erreur est vide, bg");
          this.goToResult();
        }
      }
      //When answer is wrong
      else {
        this.summary_table.push([this.current_charac, "wrong"]);
        console.log("added " + this.current_charac + "to the summary table as wrong");
        console.log("summary table :");
        console.log(this.summary_table);
        let element_block_charac = document.getElementsByClassName('block_charac') as HTMLCollectionOf<HTMLElement>;
        element_block_charac[0].style.background = "#a24040";
        this.getCurrentName();
        this.inputShown = false;
        this.mistake = true;
        this.mistakeList.push(this.current_charac);
        console.log("c'est faux et ça sent la fin");
      }
    }
    //When this is the retake session
    else if(this.progression > this.questions_amount){
      //When answer is right
      if(this.checkAnswer(this.input_value.toLowerCase())){
        let element_block_charac = document.getElementsByClassName('block_charac') as HTMLCollectionOf<HTMLElement>;
        //Mistake list not empty
        if(this.mistakeIndex < this.mistakeList.length-1){
          this.input_value = "";
          // element_block_charac[0].style.background = "#65a53e";
          this.add_correct_animation_to_class();
          this.inputShown = false;
          this.correct_answer = true;
          await this.delay(700);
          this.normal_session = false;
          this.retake_session = true;
          this.mistakeIndex++;
          this.getMistake(this.mistakeIndex);
          this.remove_correct_animation_to_class();
          element_block_charac[0].style.background = "#C3687E";
          this.correct_answer = false;
          this.inputShown = true;
          this.updateMistakeListSize();
          await this.delay(100);
          this.inputElement.setFocus();
          console.log("c'est bon et tu es dans la partie rattrappage");
        }
        //Mistake list empty
        else {
          console.log("c'est bon est tu vas quitter la partie rattrappage");
          // element_block_charac[0].style.background = "#65a53e";
          this.add_correct_animation_to_class();
          this.inputShown = false;
          this.correct_answer = true;
          await this.delay(700);
          // element_block_charac[0].style.background = "#C3687E";
          this.goToResult();
          this.remove_correct_animation_to_class();
        }
      }
      //When answer is wrong
      else {
        let element_block_charac = document.getElementsByClassName('block_charac') as HTMLCollectionOf<HTMLElement>;
        element_block_charac[0].style.background = "#a24040";
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
