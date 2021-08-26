import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;
import { Platform } from '@ionic/angular';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private platform: Platform) {
    this.initializeApp();
    
    // set to portrait
    // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
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
