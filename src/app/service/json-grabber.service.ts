import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KanaList} from './KanaList'

@Injectable({
  providedIn: 'root'
})
export class JsonGrabberService {

  TAG: string = "LearningHiraganaTablePage";

  static getKana() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  public getKana():Promise<KanaList>{
    console.log(`${this.TAG}`);
    const url: string = './../assets/data/kana.json';
    console.log(`${this.TAG} url: ${url}`);
    return new Promise(resolve => {
      this.http.get(url).subscribe(data => {
      let json: KanaList = data as KanaList;
      resolve(json);
      console.log(json)
      }, err => {
      console.log(err);
      });
    });
    
  }
  
}
