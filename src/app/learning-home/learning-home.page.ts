import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-learning-home',
  templateUrl: './learning-home.page.html',
  styleUrls: ['./learning-home.page.scss'],
})
export class LearningHomePage implements OnInit {

  constructor(private router: Router, public navCtrl: NavController) { }

  goToLearningHiraganaTable(){
    this.router.navigateByUrl('learning-hiragana-table');
  }

  goToLearningHiraganaMnemonic(){
    this.router.navigateByUrl('tabs/learning/learning-hiragana-mnemonic');
  }

  goToLearningKatakanaMnemonic(){
    this.router.navigateByUrl('tabs/learning/learning-katakana-mnemonic');
  }

  ngOnInit() {
  }

}
