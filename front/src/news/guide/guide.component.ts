import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goNext(){
    console.log('go to guide page!!');
    InfoService.plusCursor();
  }
}
