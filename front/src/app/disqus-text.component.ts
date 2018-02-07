import { Component } from '@angular/core';

@Component({
  selector: 'reply-text',
  template: `<disqus [identifier]="pageId"></disqus>`
})
export class DisqusTextComponent {
 
  pageId = '/textNews';
}