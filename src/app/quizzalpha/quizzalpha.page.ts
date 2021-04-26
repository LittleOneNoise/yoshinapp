import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quizzalpha',
  templateUrl: './quizzalpha.page.html',
  styleUrls: ['./quizzalpha.page.scss'],
})
export class QuizzalphaPage implements OnInit {

  amount: number;

  constructor(private route: ActivatedRoute, private router: Router) {
   
    // this.route.queryParams.subscribe(params => {
    //   // if (this.router.getCurrentNavigation().extras.state) {
    //     this.amount = this.router.getCurrentNavigation().extras.state.amountUrl;
    //   // }
    // });

  console.log(this.amount);

   }

  

  ngOnInit() {

    console.log(this.amount);
    console.log(this.router.getCurrentNavigation().extras.state);
    
}

}
