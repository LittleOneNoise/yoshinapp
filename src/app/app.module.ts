import { StatsService } from './service/stats.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Injectable, NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';

import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { Drivers } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot({
      name: 'statsDB',
      driverOrder: [CordovaSQLiteDriver._driver, Drivers.IndexedDB]
    })],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: NativeAudio, useClass: NativeAudio},
    StatsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

