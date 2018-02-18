import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NewsService } from '../news.service';
import { InfoService } from '../info.service';
import { type } from 'os';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  public moviePath: string;
  private port = window.location.port;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }
  
  // db에서 동영상뉴스 패스 가져오기
  ngAfterViewInit(){
    this.newsService.makeSourceList(
      InfoService.game,
      InfoService.gameKind,
      InfoService.player,
      'movie'
    ).then( res => {
      console.log(res, typeof res);
      var path = 'newsdata/'+InfoService.game+'/'+InfoService.gameKind+'/'+InfoService.player+'/'+res[0];
      if(this.port=='4201') path = 'http://127.0.0.1:5000/' + path;
      console.log(path);
      this.moviePath = path;

      // 비디오 태그속에 삽입
      // 앵귤러 프로퍼티 바인딩하면 안먹는다...
      document.querySelector('video').innerHTML = `
        <source src="${this.moviePath}" type="video/mp4">
        `
    });

  }

}
