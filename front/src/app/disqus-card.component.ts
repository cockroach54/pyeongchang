import { Component } from '@angular/core';

@Component({
  selector: 'reply-card',
  template: `<disqus [identifier]="pageId"></disqus>`
})
export class DisqusCardComponent {
 
  pageId = '/cardNews';
}