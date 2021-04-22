import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-practice-home',
  templateUrl: './practice-home.page.html',
  styleUrls: ['./practice-home.page.scss'],
})
export class PracticeHomePage implements OnInit {

  constructor(private router: Router, private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('pop-nav', '../assets/sounds/pop_nav.mp3');
  }

  

  goToLearningHiragana(){
    // this.router.navigateByUrl('/hometest');
    
    this.nativeAudio.play('pop-nav');
  }

  ngOnInit() {
  }

}
