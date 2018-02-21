import { Injectable } from '@angular/core';
declare var Materialize: any;

@Injectable()
export class InfoService {
  static player: string;
  static game: string;
  static cursor: number = 0; // 현재 뉴스 종류 인덱스. 아래 newsList의 index
  static gameKind: string; // 게임 세부종목 ex) 1500m, 5000m
  // static newsList: string[] = ['텍스트(선택)','카드(선택)','동영상(선택)','텍스트(전체)','카드(전체)','동영상(전체)'];
  static newsList: string[] = ['text','card','movie','text2','card2','movie2'];

  constructor(){  }

  static show(){
    console.log('$$$$$$$' , this.cursor);
  }

  static plusCursor(){
    // if(this.cursor == this.newsList.length-1) return;
    if(this.cursor==1 && !this.player){
      var ment = '선수를 선택하지 않았습니다. 선수를 선택해 주세요.';
      Materialize.toast(ment, 3000) // 3000 is the duration of the toast          
      return;
    }
    if(this.cursor==this.newsList.length) alert('마지막 뉴스입니다. 감사합니다.');
    else this.cursor++;
    console.log('cursor: ', this.cursor);
  }

  static minusCursor(){
    if(this.cursor == 0 ) alert('첫번째 탭입니다.');
    else this.cursor--;
    console.log('cursor: ', this.cursor);
  }
}
