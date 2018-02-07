import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log($('.bxslider'));
    
    $('.bxslider').bxSlider({
      auto: true,
      autoStart: false,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      // slideWidth: 600,
    }); 
  }

  // db에서 이미지주소 불러와서 슬라이더 돔엘리먼트 만드는 함수 필요

}
