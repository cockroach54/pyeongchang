import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  players = {
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
    this.names = Object.keys(this.players);
  }

  setPlayer(e){
    e.stopPropagation();
    var el = e.target;
    console.log(e, el);
    var playerName = e.firstElementChild.innerText;
    InfoService.player = playerName;    
    console.log('set player:', InfoService.player);

    var ment = InfoService.player + " 선수를 선택하셨습니다. 곧 뉴스 생성이 완료됩니다. 다음 화면부터 제공되는 뉴스를 보시고 설문에 응답해주시기 바랍니다. 감사합니다.";
    Materialize.toast(ment, 4000) // 4000 is the duration of the toast    

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
    console.log('go to show news!!');
    InfoService.plusCursor();
  }

  getNews(): void{
    // this.newsService.getPath(InfoService.player, InfoService.game, InfoService.gameKind).then(path => {
    //   console.log(path);
    // });
  }

}