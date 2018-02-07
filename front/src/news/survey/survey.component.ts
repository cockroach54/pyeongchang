import { Component, OnInit } from '@angular/core';
declare var Materialize: any;
declare var $: any;
declare var Kakao: any;

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Kakao.init('2c753f4f522f7fbbbad08e5568d9822a');
    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
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

  submitSurvey(){
    
    // var port = window.location.port;
    // var host = (port=='4200')? 'http://127.0.0.1:5000' : 'http://'+window.location.host;
    // document.forms['survey'].submit();
    var queryString = $("form[name=survey]").serialize();

    $.ajax({
      type: 'post',
      url: 'http://127.0.0.1:5000/survey',
      data: queryString,
      dataType: 'json',
      success: function(data){
          $("form[name=survey]").trigger('reset');
          // Materialize.toast(message, displayLength, className, completeCallback);
          Materialize.toast('설문이 제출되었습니다.', 4000) // 4000 is the duration of the toast
      }
    });
    // http://fruitdev.tistory.com/174
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

}
