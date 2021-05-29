import { StatsService } from './../service/stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {


  constructor(public statsService: StatsService) { 
  }

  addJohn(){
    this.statsService.set("1", "john");
  }

  removeAll(){
    this.statsService.clearAll();
  }

  

  async ngOnInit() {
    // await this.storageService.set('user_name', 'Shadman').then(result => {
    //   console.log('Data is saved');
    //   }).catch(e => {
    //   console.log("error: " + e);
    //   });

    //   await this.storageService.get('user_name').then(result => {
    //     if (result != null) {
    //     console.log('Username: '+ result);
    //     }
    //     }).catch(e => {
    //     console.log('error: '+ e);
    //     // Handle errors here
    //     });

    //     await this.storageService.setObject('person', {name : 'Shadman', age : 26});

    //     await this.storageService.getObject('person').then(result => {
    //       if (result != null) {
    //       console.log('Person: '+ result);
    //       }
    //       }).catch(e => {
    //       console.log('error: ', e);
    //       });




  }

}
