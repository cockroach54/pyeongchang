import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../info.service';
import { NewsService } from '../news.service';

declare var Materialize: any;

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  players_ = {
    'Kim':'kor', 
    'Lee':'kor', 
    'alpine-skiing':'fin', 
    'Park':'kor', 
    'Sam':'gha', 
    'Micky':'usa', 
    'Nakamura':'jpn', 
    'Bread':'nzl', 
    'Alberto':'pak'}; // dummy
  names = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    // this.names = Object.keys(this.players_);
    this.getPlayers();
  }

  ngAfterViewInit(){

  }

  setPlayer(e){
    e.preventDefault();
    var el = e.target;
    console.log(el.nodeName, el);
    if(el.nodeName == 'IMG'){
      el = el.parentElement; // div node;
    }
    var playerName = el.innerText;
    InfoService.player = playerName;    
    console.log('set player:', InfoService.player);

    var ment = InfoService.player + " 선수를 선택하셨습니다. 곧 뉴스 생성이 완료됩니다. 다음 화면부터 제공되는 뉴스를 보시고 설문에 응답해주시기 바랍니다. 준비되면 '다음'버튼을 눌러주세요.";
    Materialize.toast(ment, 3000) // 3000 is the duration of the toast    

    // this.goNext();
  }
  
  setGame(){
    InfoService.game = 'ski';    
    console.log('set game:', InfoService.game);    
  }

  setGameKind(){
    InfoService.gameKind = '1000m';    
    console.log('set gameKind:', InfoService.gameKind);    
  }

  goNext(){
    if(!InfoService.player){
      var ment = '선수를 선택하지 않았습니다. 선수를 선택해 주세요.';
      Materialize.toast(ment, 3000) // 3000 is the duration of the toast          
      return;
    }
    console.log('go to show news!!');
    InfoService.plusCursor();
  }

  getPlayers(): void{
    this.newsService.getPath(InfoService.game, InfoService.gameKind, 'allList').then(res => {
      var res2 = Array.prototype.slice.call(Object.values(res));
      var nations = [];
      // 한국선수 소팅
      res2 = res2.map( r => {
        r[1] = r[1].toLowerCase();
        r[2] = r[2]*1;
        if(r[1]!='kor') r[2]= r[2]+9000;
        nations.push(r[1]);
        return r;
      });
      // 종합결과 빼기.
      if(nations.indexOf('')>0){
        var id_of_all = nations.indexOf('');
        res2.splice(id_of_all, 1);
        console.log(id_of_all, res2);
      }

      res2.sort((a,b)=> a[2]-b[2]);

      // 9명까지 선착순
      console.log(nations);
      res2 = res2.slice(0,9);
      this.names = res2;
    });
  }

}