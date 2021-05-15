import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { DoubleTapDirective } from './directives/double-tap.directive';

@Injectable({
  providedIn: 'root'
})
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'press': {time: 500},  // default: 251 ms
    'pinch': {enable: false},
    'rotate': {enable: false},
  };
}

@NgModule({
  declarations: [AppComponent, DoubleTapDirective],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, SuperTabsModule.forRoot()],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: NativeAudio, useClass: NativeAudio},
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

