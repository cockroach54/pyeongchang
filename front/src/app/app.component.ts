import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // 메뉴 누르면 사이드내비 닫기
  closeHamburger(){
    var event = document.createEvent("HTMLEvents");
    event.initEvent("click",true,false);
    document.querySelector('#sidenav-overlay').dispatchEvent(event);
  }

  // ngOnInit(): void{
  //   console.log('-----dashboardComp loaded');
  // }
}
