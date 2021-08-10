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

  async determineState(input: string[]){
    console.log("determinestate : ");
    console.log(input[1]);
    if(input[1]=="correct"){
      console.log("function determined correct");
      return true;
    }
    else {
      console.log("function determined wrong");
      return false;
    }
  }

  async failPresence(key: string){
    if(await this.keyExistence(key)){
      let tabDiary = await this.get(key);
      console.log("tabDiary : ");
      console.log(tabDiary);
      for(let e of tabDiary){
        if(e.state.failAmount > 0){
          console.log(e.name + " has more than 0 fails (" + e.state.failAmount +")");
          return true;
        }
      }
    }
    return false;
  }

  async findIndexInDiary(tab: TestDiaryBank[], wantedElement: string){
    let cpt = 0;
    for(let i in tab){
      if(i[1] == wantedElement){
        return cpt;
      }
      cpt++;
    }
    return -1;
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
    //When the specific diary table doesn't exist
    if(this.tempTestDiaryArray == null){
      if(keyArray == "characterHiraganaTestDiary"){
        console.log("characterHiraganaTestDiary table didn't exist, creating it...");
        console.log("determining if the element was correctly guessed or not..");
        //When the element was correct
        if(await this.determineState(keyElement)){
          console.log(keyElement + " was correct");
          let characterHiraganaTestDiary : TestDiaryBank[] = [
            {
              name: keyElement[0],
              state: {
                failAmount: 0,
                successAmount: 1
              }
            }
          ];
          console.log("characterHiraganaTestDiary : ");
          console.log(characterHiraganaTestDiary);
          await this.set(keyArray, characterHiraganaTestDiary);
          console.log("hiragana diary updated !");
        }
        //When the element was wrong
        else {
          console.log(keyElement + " was wrong");
          console.log("characterHiraganaTestDiary : ");
          let characterHiraganaTestDiary : TestDiaryBank[] = [
            {
              name: keyElement[0],
              state: {
                failAmount: 1,
                successAmount: 0
              }
            }
          ];
          console.log(characterHiraganaTestDiary);
          await this.set(keyArray, characterHiraganaTestDiary);
          console.log("hiragana diary updated !");
        }}
      else if(keyArray == "wordHiraganaMistakes"){
      }
      else if(keyArray == "characterKatakanaMistakes"){
      }
      else if(keyArray == "wordKatakanaMistakes"){
      }
    } 
    //When the specific section table alr exist
    else if (this.tempTestDiaryArray != null) {
      let indexElement = await this.tempTestDiaryArray.findIndex(x => x.name === keyElement[0]);
      //When the element alr exists in the table, updating its state
      if(indexElement > -1){
        console.log("The element alr exists in the table, updating the state");
        //When element was correct
        if(await this.determineState(keyElement)){
          console.log(keyElement[0] + " alr existed and is correct");
          this.tempTestDiaryArray[indexElement].state.successAmount++;
        }
        //When element was wrong
        else {
          console.log(keyElement[0] + " alr existed and is wrong");
          this.tempTestDiaryArray[indexElement].state.failAmount++;
        }
        this.set(keyArray, this.tempTestDiaryArray);
      }
      //When the element doesn't exist in the table
      else {
        //If element was correct
        if(await this.determineState(keyElement)){
          console.log(keyElement[0] + " didn't exist and is correct");
          this.tempTestDiaryArray.push(
            {
              name: keyElement[0],
              state: {
                failAmount: 0,
                successAmount: 1
              }
            }
          );}
          //If element was wrong
          else {
            console.log(keyElement[0] + " didn't exist and is wrong");
            this.tempTestDiaryArray.push(
              {
                name: keyElement[0],
                state: {
                  failAmount: 1,
                  successAmount: 0
                }
              }
            );
          }
        this.set(keyArray, this.tempTestDiaryArray);
      }
    } else {
      console.log("smth went wrong when trying to update the diary db :(");
    }
  }

  async getArrayTestDiaryValue(keyArray: string):Promise<any[]>{
    this.tempTestDiaryArray = await this.get(keyArray);
    if(this.tempTestDiaryArray != null){
      let successRatio = 1.1;
      let failWithNoSuccess = 0;
      let elementValue;
      for(let e of this.tempTestDiaryArray){
        //If element has only fails with the most fails
        if(e.state.successAmount == 0 && e.state.failAmount > failWithNoSuccess ){
          successRatio = e.state.successAmount/e.state.failAmount;
          elementValue = e.name;
          failWithNoSuccess = e.state.failAmount;
        }
        //If element has success but the worst ratio
        else if(((e.state.successAmount/e.state.failAmount) < successRatio) && e.state.failAmount != 0 && failWithNoSuccess == 0){

          successRatio = e.state.successAmount/e.state.failAmount;
          elementValue = e.name;
        }
      }
      console.log([elementValue, successRatio]);
      return [elementValue, successRatio];
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

