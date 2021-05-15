import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-hiragana-mnemonic',
  templateUrl: './learning-hiragana-mnemonic.page.html',
  styleUrls: ['./learning-hiragana-mnemonic.page.scss'],
})
export class LearningHiraganaMnemonicPage implements OnInit {

  constructor() { }

  audio: HTMLAudioElement;

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = "../../assets/sounds/pop_nav.mp3";
    this.audio.load();
  }

  testaudio(){
    console.log("click");
    
    this.audio.play();
  }

}
