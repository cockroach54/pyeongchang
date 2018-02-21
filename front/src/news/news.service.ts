import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsService{
  private port = window.location.port;
  private host = (this.port=='4201')? 'http://127.0.0.1:5000' : 'http://'+window.location.host;
  private header = new Headers({'Content-Type':'application/json'});

  constructor(private http: Http){};

  // mysql에서 패스 가져오기
  public getPath(game: string, gameKind: string, player: string): Promise<object>{
    console.log("api/path api call");
    var query = 'player='+player+'&game='+game+'&gameKind='+gameKind;
    const url = this.host+'/api/path?'+query;
    return this.http.get(url)
      .toPromise()
      .then(res => {
				// this.res = res.json()[0];
        return res.json();
      })
      .catch(this.handleError);
  };

//   getKeywords(): Promise<string[]>{
//     return this.http
//               .get(this.host+'/api/keywords')
//               .toPromise()
//               .then(res => res.json());
//   }

	public makeSourceList(game: string, gameKind: string,
		 player: string, isCard: string = 'card'): Promise<object>{
    console.log("api/filelist api call");
    var query = 'player='+player+'&game='+game+'&gameKind='+gameKind+'&isCard='+isCard;
    const url = this.host+'/api/filelist?'+query;
    return this.http.get(url)
      .toPromise()
      .then(res => {
				// this.res = res.json()[0];
        return res.json();
      })
      .catch(this.handleError);
  };
  
  private handleError(error: any): Promise<any>{
    console.error('an error occured', error);
    return Promise.reject(error.message || error);
  };
}