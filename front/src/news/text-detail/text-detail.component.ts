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

  constructor(private newsService: NewsService) { }

  ngOnInit(){

  }

  ngAfterViewInit() {
    this.newsService.getPath(
      InfoService.game,
      InfoService.gameKind,
      InfoService.player,
    ).then( res =>{
      console.log(res[0]);
      if(res[0]){
        this.newsHeadline = res[0][3];
        this.newsBody = res[0][4];
      }
    });
    // this.newsService.makeTextNews();
    // this.newsHeadline = this.newsService.newsHeadline;
    // this.newsBody = this.newsService.newsBody;
  }

}
