import { MistakeBank } from './MistakeBank';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { TestDiaryBank } from './TestDiaryBank';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  
  // private _storage: Storage | null = null;
  private _storage: Storage;
  tempMistakeArray: MistakeBank[] = [];
  tempTestDiaryArray: TestDiaryBank[] = [];

  constructor(public storage: Storage) { 
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    await this.storage.defineDriver(CordovaSQLiteDriver);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async keyExistence(key: string){
    if(await this.get(key) == null){
      return false;
    }
    else{
      return true;
    }
  }

  async setArrayMistake(keyArray: string, keyElement: string){
    this.tempMistakeArray = await this.get(keyArray);
    console.log("table of mistakes : ");
    console.log(this.tempMistakeArray);
    //When the specific mistakes table doesn't exist
    if(this.tempMistakeArray == null){
      if(keyArray == "characterHiraganaMistakes"){
        console.log("characterhiraganamistales table didn't exist, creating it...");
        let characterHiraganaMistakes: MistakeBank[] = [{name: keyElement, failAmount: 1}];
        await this.set(keyArray, characterHiraganaMistakes);
      }
      else if(keyArray == "wordHiraganaMistakes"){
        let wordHiraganaMistakes: MistakeBank[] = [{name: keyElement, failAmount: 1}];
        await this.set(keyArray, wordHiraganaMistakes);
      }
      else if(keyArray == "characterKatakanaMistakes"){
        let characterKatakanaMistakes: MistakeBank[] = [{name: keyElement, failAmount: 1}];
        await this.set(keyArray, characterKatakanaMistakes);
      }
      else if(keyArray == "wordKatakanaMistakes"){
        let wordKatakanaMistakes: MistakeBank[] = [{name: keyElement, failAmount: 1}];
        await this.set(keyArray, wordKatakanaMistakes);
      }
    }
    //When the specific mistakes table alr exist
    else{
      let indexElement = this.tempMistakeArray.findIndex(x => x.name === keyElement);
      //When the element alr exists in the table, updating its mistake amount
      if(indexElement > -1){
        console.log("The element alr exists in the table, updating the mistake amount...");
        this.tempMistakeArray[indexElement].failAmount++;
        this.set(keyArray, this.tempMistakeArray);
      }
      //When the element doesn't exist in the table
      else {
        console.log("The element doesn't exist in the table, adding it...");
        this.tempMistakeArray.push({name: keyElement, failAmount: 1})
        this.set(keyArray, this.tempMistakeArray);
      }
    }
  }

  async getArrayMistakeValue(keyArray: string):Promise<any[]>{
    this.tempMistakeArray = await this.get(keyArray);
    if(this.tempMistakeArray != null){
      let maxMistakes = 0;
      let valueMistake;
      for(let e of this.tempMistakeArray){
        if(e.failAmount > maxMistakes){
          maxMistakes = e.failAmount;
          valueMistake = e.name;
        }
      }
      return [valueMistake, maxMistakes];
    }
  }

  async setArrayTestDiary(keyArray: string, keyElement: string[]){
    this.tempTestDiaryArray = await this.get(keyArray);
    console.log("table of diary test: ");
    console.log(this.tempTestDiaryArray);
    //When the specific diary table doesn't exist
    if(this.tempTestDiaryArray == null){
      if(keyArray == "characterHiraganaTestDiary"){
        console.log("characterHiraganaTestDiary table didn't exist, creating it...");
        let characterHiraganaTestDiary: TestDiaryBank[] = [{name: keyElement, data {failAmount: 1, successAmount: 1}}];
        await this.set(keyArray, characterHiraganaMistakes);
      }
      else if(keyArray == "wordHiraganaMistakes"){
        let wordHiraganaMistakes: MistakeBank[] = [{name: keyElement, failAmount: 1}];
        await this.set(keyArray, wordHiraganaMistakes);
      }
      else if(keyArray == "characterKatakanaMistakes"){
        let characterKatakanaMistakes: MistakeBank[] = [{name: keyElement, failAmount: 1}];
        await this.set(keyArray, characterKatakanaMistakes);
      }
      else if(keyArray == "wordKatakanaMistakes"){
        let wordKatakanaMistakes: MistakeBank[] = [{name: keyElement, failAmount: 1}];
        await this.set(keyArray, wordKatakanaMistakes);
      }
    }
    //When the specific mistakes table alr exist
    else{
      let indexElement = this.tempMistakeArray.findIndex(x => x.name === keyElement);
      //When the element alr exists in the table, updating its mistake amount
      if(indexElement > -1){
        console.log("The element alr exists in the table, updating the mistake amount...");
        this.tempMistakeArray[indexElement].failAmount++;
        this.set(keyArray, this.tempMistakeArray);
      }
      //When the element doesn't exist in the table
      else {
        console.log("The element doesn't exist in the table, adding it...");
        this.tempMistakeArray.push({name: keyElement, failAmount: 1})
        this.set(keyArray, this.tempMistakeArray);
      }
    }
  }

  // Create and expose methods that users of this service can
  // call, for example:
  async set(key: string, value: any) {
    await this._storage.set(key, value);
  }

  async clearAll() {
    await this._storage.clear();
  }

  async get(key: string) {
    return await this._storage.get(key);
  }

}

