import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
       console.log("app initialized !!")
        SplashScreen.hide({
          fadeOutDuration: 1000
        });
    });
}

}
