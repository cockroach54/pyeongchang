import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InfoService } from '../info.service';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-text-detail',
  templateUrl: './text-detail.component.html',
  styleUrls: ['./text-detail.component.css']
})
export class TextDetailComponent{
	public newsHeadline: string = 'HEADLINE';
  public newsBody: string = 'BODY';
  public newsKind: string;

  constructor(private newsService: NewsService) { }

  ngOnInit(){
  }

  ngAfterViewInit() {
    this.newsKind = InfoService.newsList[InfoService.cursor];
    // 개인/종합 뉴스 구분... 종합은 player==game name
    var player = (this.newsKind[this.newsKind.length-1] == '2')? InfoService.game: InfoService.player;
    // 개인뉴스 가져오기
    this.newsService.getPath(
      InfoService.game,
      InfoService.gameKind,
      player,
    ).then( res =>{
      console.log(res[0]);
      if(res[0]){
        // 디비 스키마 변하면 아래 숫자도 바뀜
        this.newsHeadline = res[0][5];
        this.newsBody = res[0][6];

        // news body 파싱 및 본문에 삽입
        this.newsBody = this.newsBody.replace(/\.\s/g, '.</p><p>');
        this.newsBody = '<p>' + this.newsBody + '</p>';
        this.newsBody += '<br/><p style="font-size:.8rem; opacity:.8">' 
        + '"이 기사는 서울대학교 융합과학기술대학원 인간중심컴퓨팅연구실에서 개발한 기사 작성 알고리즘 로봇이 경기 종료 직후 실시간으로 작성한 기사입니다."' 
        + '</p><p style="text-align:right; font-size:.8rem; opacity:.8">'
        + '기사제공 NEWS ROBOT' + '</p>'
        document.getElementById('newsBody').innerHTML = this.newsBody;
      }
    });
  }

}
