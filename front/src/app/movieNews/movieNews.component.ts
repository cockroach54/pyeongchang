import { Component } from '@angular/core';

@Component({
  selector: 'movieNews',
  templateUrl: './movieNews.component.html',
  styleUrls: ['./movieNews.component.css']
})
export class MovieNewsComponent {
  title = 'movieNews';

  gotoMovie(){
    var port = window.location.port;
    var host = (port=='4200')? 'http://127.0.0.1:5000' : 'http://'+window.location.host;
   
    window.location.href = host + '/contents/movie';
  }
}
