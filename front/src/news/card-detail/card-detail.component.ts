import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { NewsService } from '../news.service';
import { InfoService } from '../info.service';
declare var $: any;

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  public filelist: string[] = [];
  public newsKind: string;
  private port = window.location.port;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    
  }

  // db에서 이미지주소 불러와서 슬라이더 돔엘리먼트 만드는 함수 필요
  ngAfterViewInit(){
    this.newsKind = InfoService.newsList[InfoService.cursor];
    // 개인/종합 뉴스 구분... 종합은 player==game name
    var player = (this.newsKind[this.newsKind.length-1] == '2')? InfoService.game: InfoService.player;

    this.newsService.makeSourceList(
      InfoService.game,
      InfoService.gameKind,
      player,
    ).then( res => {
      console.log(res);
      var templist = res as string[];
      var templist2 = [];
      templist.forEach( (f, i) => {
        var path = 'newsdata/'+InfoService.game+'/'+InfoService.gameKind+'/'+player+'/'+f;
        if(this.port=='4201') path = 'http://127.0.0.1:5000/' + path;
        templist2[i] = path;
      });
      templist2.sort(function(a,b){
        return a>b ? 1: -1;
      }); // 파일명소팅
      this.filelist = (templist2[templist2.length-1].indexOf('racevis')>-1)? templist2.slice(0,-1): templist2; // racevis.png 제외
      
      setTimeout(this.makeCarousel, 500);
    });
  }
  
  ngAfterViewChecked(){
  }

  makeCarousel(){
    $('.bxslider').bxSlider({
      auto: true,
      autoStart: false,
      autoControls: false,
      stopAutoOnClick: true,
      pager: true,
      infiniteLoop: false,
      // slideWidth: 600,
    }); 
    // z-index 설문지 뒤로가게 줄이기
    (<HTMLElement>document.querySelector('a.bx-next')).style.zIndex = '100';
    (<HTMLElement>document.querySelector('a.bx-prev')).style.zIndex = '100';
  
    
    //   // material css 용 슬라이더
    // $('.carousel.carousel-slider').carousel({fullWidth: true});
  }
}
