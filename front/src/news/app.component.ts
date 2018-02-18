import { Component, ViewChild, OnInit } from '@angular/core';
import { Info } from './info.model';
import { InfoService } from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news';
  info = new Info();

  //array shuffle
  shuffle(a) {
    var j, temp, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        temp = a[i - 1];
        a[i - 1] = a[j];
        a[j] = temp;
    }
  }

  ngOnInit(){
    this.shuffle(InfoService.newsList);
    InfoService.newsList = ['guide', 'select'].concat(InfoService.newsList);
    // url에서 처음 뉴스종류 따오기
    var newsKind = window.location.pathname.split('/')[2].split(';')[0];
    InfoService.cursor = InfoService.newsList.indexOf(newsKind); 
  
    // game, gameKind parsing
    // this.route.params.toPromise().then((params: Params)=>{
    //   console.log(params['game']);
    // });
    // 나중에 위의 코드식으로 바꾸자
    var params = window.location.pathname.split('/');
    InfoService.game = params[3];
    InfoService.gameKind = params[4];
    console.log(InfoService.game, InfoService.gameKind)

  }
}