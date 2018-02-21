import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, DoCheck,
  EventEmitter, AfterViewInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Info } from '../info.model';
import { InfoService } from '../info.service';

declare var $: any;

@Component({
  selector: 'app-other-link',
  templateUrl: './other-link.component.html',
  styleUrls: ['./other-link.component.css']
})
export class OtherLinkComponent implements OnInit {
  progressWidth: number = 0;
  oldInfo: Info = new Info();
  info: Info = new Info();
  newsKind: string;
  newsList: string[];
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  
  setProgressBar(i){
    this.progressWidth = 100/InfoService.newsList.length * (i+1);
  }

  ngOnInit() {
    console.log(InfoService.newsList);
    this.newsList = InfoService.newsList;

  }

  ngAfterViewInit(){
    // 처음에 중간도메인으로 온경우 탭바 세팅
    setTimeout(()=>{
      $('ul.tabs').tabs('select_tab', InfoService.newsList[InfoService.cursor]);
      this.setProgressBar(InfoService.newsList.indexOf(InfoService.newsList[InfoService.cursor]));
    }, 300);
  }

  myNavigation(el, i){
    InfoService.cursor = i;
  }

  // ngOnChanges(changes: SimpleChanges){
  //   let change = changes['info'];
  //   console.log('---------onChanges--------');
  //   console.log(change.previousValue, change.currentValue);
  // }

  ngDoCheck(){
    // 객체의 경우 내부 프로퍼티만 변하는경우 setter, ngOnChange에서 못잡음  
    if(InfoService.cursor !== this.oldInfo.cursor){
      console.log('---change detected---');

      // InfoService.cursor변하면 여기서 저절로 라우팅
      var i = InfoService.cursor;
      this.oldInfo.cursor = InfoService.cursor;
      this.info = InfoService;
      this.newsKind = this.info.newsList[this.info.cursor];
      // newsKind 우리말로 변경
      if(this.newsKind=='text') this.newsKind='선택-텍스트'
      else if(this.newsKind=='text2') this.newsKind='종합-텍스트'
      else if(this.newsKind=='card') this.newsKind='선택-카드'
      else if(this.newsKind=='card2') this.newsKind='종합-카드'
      else if(this.newsKind=='movie') this.newsKind='선택-동영상'
      else if(this.newsKind=='movie2') this.newsKind='종합-동영상'

      if(i==InfoService.newsList.length){
        this.endNews();
        return;
      }

      var newsKind_ = InfoService.newsList[i];
      $('ul.tabs').tabs('select_tab', newsKind_);
      this.setProgressBar(i);

      this.router.navigate(['contents/', newsKind_, InfoService.game, InfoService.gameKind]);
    }
  }

  endNews(){
    // alert('마지막 뉴스입니다. 감사합니다.');
    document.getElementById('newsInfo').innerHTML = '';
    this.router.navigate(['contents/endPage/'+InfoService.game+'/'+InfoService.gameKind]);    
  }
}


