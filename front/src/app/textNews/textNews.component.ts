import { Component } from '@angular/core';

@Component({
  selector: 'textNews',
  templateUrl: './textNews.component.html',
  styleUrls: ['./textNews.component.css']
})
export class TextNewsComponent {
  title = 'textNews';

  gotoText(){
    var port = window.location.port;
    var host = (port=='4200')? 'http://127.0.0.1:5000' : 'http://'+window.location.host;
   
    window.location.href = host + '/contents/text';
  }
}
