import { Component } from '@angular/core';

@Component({
  selector: 'reply-movie',
  template: `<disqus [identifier]="pageId"></disqus>`
})
export class DisqusMovieComponent {
 
  pageId = '/movieNews';
}