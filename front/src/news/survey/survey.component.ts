import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Info } from '../info.model';
import { InfoService } from '../info.service';
import { forEach } from '@angular/router/src/utils/collection';

declare var Materialize: any;
declare var $: any;
declare var Kakao: any;

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  info: Info = new Info();
  newsKind: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    // 설문지 모달 선언
    $('.modal').modal();

    // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    Kakao.init('2c753f4f522f7fbbbad08e5568d9822a');
    Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: '평창 동계올림픽 로봇 뉴스',
        description: '#평창 #동계 #로봇 #HCCLab #AI #ROBOT',
        imageUrl: 'http://koreabizwire.com/wp/wp-content/uploads/2017/01/12695156865_f899306b17_z.jpg',
        // imageUrl: 'http://127.0.0.1:5000/assets/ex3.jpg',
        link: {
          mobileWebUrl: 'http://127.0.0.1:5000/contents/card',
          webUrl: 'http://127.0.0.1:5000/contents/card'
        }
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845
      },
      buttons: [
        {
          title: '뉴스 보기',
          link: {
            mobileWebUrl: 'http://127.0.0.1:5000/contents/text',
            webUrl: 'http://127.0.0.1:5000/contents/text'
          }
        },
        // {
        //   title: '보노봇 보기',
        //   link: {
        //     mobileWebUrl: 'http://147.47.123.184:5910',
        //     webUrl: 'http://147.47.123.184:5910'
        //   }
        // }
      ]
    });
  }

  getInfoService(){
    this.info = InfoService;
    this.newsKind = this.info.newsList[this.info.cursor];
  }

  submitSurvey(){
    /*
     var port = window.location.port;
     var host = (port=='4200')? 'http://127.0.0.1:5000' : 'http://'+window.location.host;
     document.forms['survey'].submit();
    */
    // this.getInfoService(); // info 내용 갱신필요

    var queryString = $("form[name=survey]").serialize();
    // form 유효성검사
    if(queryString.split('&').length != 19){ // 문항이 총 19개
      Materialize.toast('설문을 모두 작성해주세요.', 4000) // 4000 is the duration of the toast    
      console.log(queryString);    
      return;
    }
    var basicInfo = {
      seq: this.info.newsList,
      newsKind: this.newsKind,
      gameKind: this.info.gameKind,
      game: this.info.game,
      player: this.info.player,
    }
    for(var i in basicInfo){
      queryString = i+'='+basicInfo[i]+'&' + queryString;
    }
    console.log(queryString);

    var port = window.location.port;
    var host = (port=='4201')? 'http://127.0.0.1:5000' : 'http://'+window.location.host;
    $.ajax({
      type: 'post',
      url: host + '/survey',
      data: queryString,
      dataType: 'json',
      success: function(data){
          $("form[name=survey]").trigger('reset');
          // Materialize.toast(message, displayLength, className, completeCallback);
          Materialize.toast('설문이 제출되었습니다.', 4000) // 4000 is the duration of the toast
      }
    });
    // http://fruitdev.tistory.com/174

    // 설문지 모달 닫기
    $('#modal1').modal('close');

    // 다음 뉴스로 넘어가기
    InfoService.plusCursor();
  }

  gotoWeb(){
    var port = window.location.port;
    var host = (port=='4200')? 'http://127.0.0.1:5000' : 'http://'+window.location.host;
  
    // window.location.href = host+'/textNews';
    var p = window.location.pathname;
    if(p.indexOf('text')) p='/textNews'
    else if(p.indexOf('card')) p='/cardNews'
    else p='/movieNews'

    window.location.href = host + p;
  }

  ngAfterContentChecked(){
    this.getInfoService(); // info 내용 갱신필요
  }
}
