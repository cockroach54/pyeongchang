import { Component } from '@angular/core';

@Component({
  selector: 'cardNews',
  templateUrl: './cardNews.component.html',
  styleUrls: ['./cardNews.component.css']
})
export class CardNewsComponent {
  title = 'cardNews';

  gotoCard(){
    var port = window.location.port;
    var host = (port=='4200')? 'http://127.0.0.1:5000' : 'http://'+window.location.host;
   
    window.location.href = host + '/contents/card';
  }
}
