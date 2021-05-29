import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

const STORAGE_KEY = 'favoriteFilms';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  
  private _storage: Storage | null = null;

  constructor(public storage: Storage) { 
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    await this.storage.defineDriver(CordovaSQLiteDriver);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public clearAll() {
    this._storage.clear();
  }


  // isFavorite(filmId) {
  //   return this.getAllFavoriteFilms().then(result => {
  //     return result && result.indexOf(filmId) !== -1;
  //   });
  // }

  // favoriteFilm(filmId) {
  //   return this.getAllFavoriteFilms().then(result => {
  //     if (result) {
  //       result.push(filmId);
  //       return this.storage.set(STORAGE_KEY, result);
  //     } else {
  //       return this.storage.set(STORAGE_KEY, [filmId]);
  //     }
  //   });
  // }

  // unfavoriteFilm(filmId) {
  //   return this.getAllFavoriteFilms().then(result => {
  //     if (result) {
  //       var index = result.indexOf(filmId);
  //       result.splice(index, 1);
  //       return this.storage.set(STORAGE_KEY, result);
  //     }
  //   });
  // }

  // getAllFavoriteFilms() {
  //   return this.storage.get(STORAGE_KEY);
  // }

}
