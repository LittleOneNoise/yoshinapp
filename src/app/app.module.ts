import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Injectable, NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { SuperTabsModule } from '@ionic-super-tabs/angular';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, SuperTabsModule.forRoot()],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: NativeAudio, useClass: NativeAudio},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

